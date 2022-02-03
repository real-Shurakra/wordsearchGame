<?php
include '../conf/config.php';
include '../php/DatabaseControl.php';

class GameEngine {
    function __construct() {
        global $dbipv4, $dbuser, $dbpass, $dbname;
        $this->databaseControl = new DatabaseControl($dbipv4, $dbuser, $dbpass, $dbname);
    }

    function _sendToDB($sqlString, $moreThanOne=false) {
        try{
            if (!$moreThanOne) {
                $dbReturn = $this->databaseControl->sendOneToDatabase($sqlString);
            }
            else{
                $dbReturn = $this->databaseControl->sendMultipleToDatabase($sqlString);
            }
            if (!$dbReturn['rc']) {throw new ErrorException($dbReturn['rv']);}
            else{$answer = array('rc'=>true, 'rv'=>$dbReturn['rv']);}
        }
        catch(ErrorException $error){$answer = array('rc'=>false, 'rv'=>strval(debug_backtrace()[0]['line']).': '.debug_backtrace()[0]['class'].'.'.debug_backtrace()[0]['function'].debug_backtrace()[0]['type'].$error->getMessage());}
        finally{return $answer;}
    }

    function getAllWords() {
        try{
            $sqlQuery_getAllWords = "SELECT description FROM getallwords";
            $sqlQuery_getAllWords_Result = $this->_sendToDB($sqlQuery_getAllWords);
            if ($sqlQuery_getAllWords_Result['rc']) {
                $answer = array('rc'=>true, 'rv'=>$sqlQuery_getAllWords_Result['rv']);
            }
            else {throw new ErrorException($sqlQuery_getAllWords_Result['rv']);}
        }
        catch(ErrorException $error){$answer = array('rc'=>false, 'rv'=>strval(debug_backtrace()[0]['line']).': '.debug_backtrace()[0]['class'].'.'.debug_backtrace()[0]['function'].debug_backtrace()[0]['type'].$error->getMessage());}
        finally{return $answer;}
    }

    function getHighScoreList($word){
        try{
            $sqlQuery_getHighScoreList = "SELECT * FROM gethighscorelist WHERE word = '$word' LIMIT(10);";
            $sqlQuery_getHighScoreList_Result = $this->_sendToDB($sqlQuery_getHighScoreList);
            if ($sqlQuery_getHighScoreList_Result['rc']) {
                $antwort = '';
                $arrayhighscore = $sqlQuery_getHighScoreList_Result['rv'];
                for ($i=0; $i <count($arrayhighscore) ; $i++) { 
                    $antwort .= '
                    <td>'.($i + 1).'.</id>
                    <td>'.$arrayhighscore['username'].'</td>
                    <td>'.$arrayhighscore['trys'].'</td>
                    <td>'.$arrayhighscore['time'].'</td>';
                }
                $answer = array('rc'=>true, 'rv'=>$sqlQuery_getHighScoreList_Result['rv']);
            }
            else {throw new ErrorException($sqlQuery_getHighScoreList_Result['rv']);}
        }
        catch(ErrorException $error){$answer = array('rc'=>false, 'rv'=>strval(debug_backtrace()[0]['line']).': '.debug_backtrace()[0]['class'].'.'.debug_backtrace()[0]['function'].debug_backtrace()[0]['type'].$error->getMessage());}
        finally{return $answer;}
    }
}