module IQuery

import IQuery.Timeout
import IQuery.Interval
import IQuery.Event
import IQuery.Elements
import IQuery.Utils

%access public

-- Window Object functions

alert : String -> IO ()
alert msg =
  mkForeign (FFun "alert(%0)" [FString] FUnit) msg

atob : String -> IO String
atob str =
  mkForeign (FFun "atob(%0)" [FString] FString) str

blur : IO ()
blur = mkForeign (FFun "blur()" [] FUnit)

btoa : String -> IO String
btoa str =
  mkForeign (FFun "btoa(%0)" [FString] FString) str

close : IO ()
close = mkForeign (FFun "close()" [] FUnit)

confirm : Maybe String -> IO Bool
confirm (Just msg) = map intToBool $
  mkForeign (FFun "confirm(%0)" [FString] FInt) msg
confirm Nothing = map intToBool $
  mkForeign (FFun "confirm()" [] FInt)

focus : IO ()
focus = mkForeign (FFun "focus()" [] FUnit)

moveBy : Int -> Int -> IO ()
moveBy x y =
  mkForeign (FFun "moveBy(%0,%1)" [FInt, FInt] FUnit) x y

moveTo : Int -> Int -> IO ()
moveTo x y =
  mkForeign (FFun "moveTo(%0,%1)" [FInt, FInt] FUnit) x y

open : String -> String -> String -> Bool -> IO ()
open url name specs replace =
  mkForeign (FFun "open(%0,%1,%2,%3)"
                  [FString, FString, FString, FInt]
                  FUnit
            ) url name specs (boolToInt replace)

print : IO ()
print = mkForeign (FFun "print()" [] FUnit)

prompt : String -> String -> IO (Maybe String)
prompt msg default =
  mkForeign (
    FFun "prompt(%0,%1)" [FString, FString] FString
  ) msg default >>= nullCheck {t = FString}

resizeBy : Int -> Int -> IO ()
resizeBy x y =
  mkForeign (FFun "resizeBy(%0,%1)" [FInt, FInt] FUnit) x y

resizeTo : Int -> Int -> IO ()
resizeTo x y =
  mkForeign (FFun "resizeTo(%0,%1)" [FInt, FInt] FUnit) x y

scrollBy : Int -> Int -> IO ()
scrollBy x y =
  mkForeign (FFun "scrollBy(%0,%1)" [FInt, FInt] FUnit) x y

scrollTo : Int -> Int -> IO ()
scrollTo x y =
  mkForeign (FFun "scrollTo(%0,%1)" [FInt, FInt] FUnit) x y

stop : IO ()
stop = mkForeign (FFun "stop()" [] FUnit)
