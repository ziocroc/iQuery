module Main

import IQuery

testPrompt : String -> IO ()
testPrompt def = do s <- prompt "Type \"stop\"" def
                    case s of
                        Just "stop" => pure ()
                        Just "" => do alert "Empty?"
                                      testPrompt def
                        Just s' => do alert "No."
                                      testPrompt s'
                        Nothing => alert "Cancel."

closeLoop : IO ()
closeLoop = do shouldClose <- confirm $ Just "Close?"
               case shouldClose of
                 True => close
                 False => map (const ()) $ setTimeout closeLoop 3000 
 
main : IO ()
main = do
  alert "test"
  confirm Nothing

  b <- atob "test"
  a <- btoa b
  alert $ "atob test = " ++ b
  alert $ "btoa " ++ b ++ " = " ++ a

  ded <- setTimeout (alert "X" >>= const close) 10000

  movres <- flip setInterval 700 $ do
    resizeBy (- 100) (- 100)
    moveBy 100 50

  reset <- flip setInterval 1800 $ do
    resizeTo 800 800
    moveTo 0 0

  flip setTimeout 7000 $ do
    clearTimeout ded
    clearInterval movres
    clearInterval reset

    testPrompt "abcdefg"

    scrollTo 1000 200
    stop

    open "http://google.it" "_blank" "" False

    alert "blur ... 2s .. focus"
    blur

    flip setTimeout 2000 $ do
      focus
      scrollBy (- 500) 300
      map (flip when print) $ confirm (Just "Print?")
      closeLoop

    return ()
  return ()

