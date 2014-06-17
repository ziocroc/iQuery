module Utils

%access public

boolToInt : Bool -> Int
boolToInt True = 1
boolToInt False = 0

nullCheck : {t : FTy} -> interpFTy t -> IO (Maybe (interpFTy t))
nullCheck {t} value = let it = interpFTy t in
  mkForeign (
    FFun "%0!=null?%1:%2"
          [ t, FAny (Maybe it), FAny (Maybe it) ]
          (FAny (Maybe it))
  ) value (Just value) Nothing

