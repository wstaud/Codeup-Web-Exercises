<?PHP

// returns true or false based on whether the key is available
function inputHas($key) {
    if (isset($_REQUEST[$key])) {
       return true; 
    }else{
        return false;
    }
}

// returns the value specified by the key, or null if the key is not set
function inputGet($key) {
    if (inputHas($key) === true) {
        return $_REQUEST[$key];
    }else{
        return null;
    }
}

// returns the input as a safely escaped string
function escape($input) {
    $newString = htmlspecialchars(strip_tags($input));
    return $newString;
}


?>



