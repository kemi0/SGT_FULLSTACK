<?php 
header("Access-Control-Allow-Origin: http://localhost:3000");
header("Access-control-allow-Headers: *");

$postJSON = file_get_contents('php://input');
$post = json_decode($postJSON, TRUE);

$PAGEACCESS = TRUE;
require_once('mysqlcredentials.php');

$output = [
        'success' => false,
        'data' => [],
        'errors' => [],
];

switch($_GET['action']){
    case 'get':
        switch($_GET['resource']){
            case 'students' : {
                require_once('./fetch_students.php');
            }
            break;
        }
    case 'post':
        switch($_GET['resource']){
            case 'add_student':
                if(!empty($post)){
                    require_once('./add_student.php');
                }
                break;
        }
}

if(isset($students)){
    $output['data'] = $students;

}

$json_output = json_encode($output);

print($json_output);

?>