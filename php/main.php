<?php
include '../php/GameEngine.php';
class main {
    function __construct() {
        $this->gameEngine = new GameEngine();
    }

    function jsAblauf($mode) {
        switch ($mode) {
            case 'getAllWords':
                return json_encode($this->gameEngine->getAllWords());
                break;

            case 'getHighScoreList':
                return json_encode($this->gameEngine->getHighScoreList());
                break;
            
            default:
                # code...
                break;
        }
    }
}

$main = new main();
$jsAblauf = $main->jsAblauf($_REQUEST['mode']);
echo $jsAblauf;