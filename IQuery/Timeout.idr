module Timeout

%access public

abstract
data Timeout : Type where
  MkTimeout : Ptr -> Timeout

setTimeout : IO () -> Float -> IO Timeout
setTimeout f t = do
  e <- mkForeign (
    FFun "setTimeout(%0,%1)" [FFunction FUnit (FAny (IO ())), FFloat] FPtr
  ) (const f) t
  return (MkTimeout e)

setInterval : IO () -> Float -> IO Timeout
setInterval f t = do
  e <- mkForeign (
    FFun "setInterval(%0,%1)" [FFunction FUnit (FAny (IO ())), FFloat] FPtr
  ) (const f) t
  return (MkTimeout e)

clearTimeout : Timeout -> IO ()
clearTimeout (MkTimeout p) =
  mkForeign (FFun "clearTimeout(%0)" [FPtr] FUnit) p

clearInterval : Timeout -> IO ()
clearInterval (MkTimeout p) =
  mkForeign (FFun "clearInterval(%0)" [FPtr] FUnit) p
