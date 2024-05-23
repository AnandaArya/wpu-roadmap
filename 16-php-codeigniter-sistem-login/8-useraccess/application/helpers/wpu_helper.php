<?php

function is_logged_in()
{
    // untuk memanggil library ci didalam fungsi ini
    $ci = get_instance();
    if(!$ci->session->userdata('email')) {
        redirect('auth');
    } else {
        $role_id = $ci->session->userdata('role_id');
        // mengambil uri controller
        $menu = $ci->uri->segment(1);

        $queryMenu = $ci->db->get_where('user_menu', ['menu' => $menu])->row_array();
        $menu_id = $queryMenu['id'];

        $userAccess = $ci->db->get_where('user_access_menu', [
            'role_id' => $role_id,
            'menu_id' => $menu_id
        ]);
        
        // apabila userAccess ini ada isinya jumlah barisnya lebih kecil dari 1 
        if($userAccess->num_rows() < 1) {
            redirect('auth/blocked');
        }
    }
}