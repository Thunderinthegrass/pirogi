<?php 
  
  $method = $_SERVER['REQUEST_METHOD'];

  if ($method !== 'POST') {
    exit();
  }

  $project_name = 'Мегапироги';
  $admin_email = 'romannasachevsky@romannasachevsky.ru';
  $form_subject = 'Заявка с сайта Мегапироги';
  $message = '';

  $color_counter = 1;

  foreach ($_POST as $key => $value) {
    if ($value === '') {
      continue;
    }

    $color = $color_counter % 2 === 0 ? '#ffffff' : '#c7e1f3';
    $message .= "<tr style='background-color: $color;'>
                  <td style='padding: 10px; border: 1px solid #5be0e0;'>$key</td>
                  <td style='padding: 10px; border: 1px solid #5be0e0;'>$value</td>
                </tr>";

    $color_counter++;
  }

  $message = "<table style='width: 100%;'>$message</table>";
  
  $headers  = "MIME-Version: 1.0\r\n"; 
  $headers .= "Content-type: text/html; charset=utf-8\r\n";
  $headers .= "From: $admin_email\r\n";

  $success_send = mail($admin_email, $form_subject, $message, $headers);

  if ($success_send) {
    echo 'success';
  }
  else {
    echo 'error';
  }

