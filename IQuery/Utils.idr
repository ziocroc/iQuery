module Utils

%access public

boolToInt : Bool -> Int
boolToInt True = 1
boolToInt False = 0

intToBool : Int -> Bool
intToBool x = x /= 0
