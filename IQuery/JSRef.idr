module JSRef

%access public

abstract
data JSRef (a : Typw) = MkJSRef Ptr

newJSRef : { a : Type } -> a -> IO (JSRef a)
newJSRef { a } x = do
  j <- mkForeign (
    FFun "Object.create({}, { v : { value: %0, writable: true } })"
         [ FAny a ] FPtr
  ) x
  return $ MkJSRef j

writeJSRef : { a : Type } -> a -> JSRef a -> IO ()
writeJSRef { a } x (MkJSRef j) = mkForeign (
    FFun "%0.v=%1" [ FPtr, FAny a ] FUnit
  ) j x

readJSRef : { a : Type } -> JSRef a -> IO a
readJSRef { a } (MkJSRef j) = mkForeign (
    FFun "%0.v" [ FPtr ] (FAny a)
  ) j

modifyJSRef : (a -> a) -> JSRef a -> IO a
modifyJSRef f j = do x <- readJSRef j
                     writeJSRef (f x) j
                     return x

modifyJSRef_ : (a -> a) -> JSRef a -> IO ()
modifyJSRef_ f j = readJSRef j >>= flip writeJSRef j . f

