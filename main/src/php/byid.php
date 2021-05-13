<?php
header("Access-Control-Allow-Origin: http://localhost:4200");   
header("Content-Type: application/json; charset=UTF-8");    
header("Access-Control-Allow-Methods: POST, DELETE, OPTIONS");    
header("Access-Control-Max-Age: 3600");    
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");  

$ch = curl_init();
// curl_setopt($ch,CURLOPT_URL,"https://totoapp.ladesk.com/api/knowledgebase/entries?&apikey=8774gxnfw4bk9lqpc6du9v0laz6xe5t9");
curl_setopt($ch,CURLOPT_URL,'https://totoapp.ladesk.com/api/v3/tickets');
$headr = array();
$headr[] = 'Content-type: application/json';
$headr[] = 'apikey: rrk9g42k0lc03io20h8512iswqn22c7j';

curl_setopt($ch, CURLOPT_HTTPHEADER,$headr);
curl_setopt($ch,CURLOPT_RETURNTRANSFER,true);
$curl_response=curl_exec($ch);
if ($curl_response === false) {
    $info = curl_error($ch);
    curl_close($ch);
    die("error occurred during curl exec. Additional info: " . var_export($info, true));
}

curl_close($ch);
// foreach ($curl_response as $key => $element) {
//     if ($element !== "272y38qq") {
//         unset($curl_response[$key]);
//     }
}
/* process $curl_response here */
// print_r(json_decode($curl_response));
// echo json_encode($curl_response);
print_r($curl_response);
?>