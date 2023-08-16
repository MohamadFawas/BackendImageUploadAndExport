package com.crud.practiceCRUD.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.crud.practiceCRUD.entity.Image;

public interface ImageRepository extends JpaRepository<Image, Long>{

}
