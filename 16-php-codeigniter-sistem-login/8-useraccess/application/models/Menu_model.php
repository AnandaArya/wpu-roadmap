<?php 

defined('BASEPATH') OR exit('No direct script access allowed');

class Menu_model extends CI_Model {

    public function getSubMenu()
    {
        // join dari tabel user_sub_menu ke tabel user_menu
        // SELECT bintang dari tabel user_sub_menu dan namanya saja dari tabel user_menu
        $query = "SELECT `user_sub_menu`.*, `user_menu`.`menu`
                FROM `user_sub_menu` JOIN `user_menu`
                ON `user_sub_menu`.`menu_id` = `user_menu`.`id`
            ";
        return $this->db->query($query)->result_array();
    }
}

