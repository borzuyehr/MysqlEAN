CREATE TABLE articlecategory ( 
    Id int(11) NOT NULL AUTO_INCREMENT, 
    CategoryName varchar(100) NOT NULL, 
    Details varchar(400) DEFAULT NULL, 
    IsValid tinyint(1) NOT NULL, 
    CreatedDate datetime NOT NULL,
    ModifiedDate datetime DEFAULT NULL,
    PRIMARY KEY (Id), 
    KEY idx_articlecategory_CreatedDate (CreatedDate) COMMENT 'Added Index on the createdate' ) 
    ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

CREATE TABLE article ( 
    Id int(11) NOT NULL AUTO_INCREMENT, 
    ArticleCategory_FK int(11) DEFAULT NULL, 
    ArticleCost float NOT NULL, 
    Name varchar(200) NOT NULL, 
    Description longtext, 
    CreatedDt datetime NOT NULL, 
    IsActive tinyint(1) NOT NULL, 
    UpdatedDt datetime DEFAULT NULL, 
    ArticlePrice float NOT NULL, 
    PRIMARY KEY (Id), 
    KEY FKC_Article_to_ArticleCategory_idx (Id,ArticleCategory_FK), 
    KEY FKC_Article_to_ArticleCategory (ArticleCategory_FK),
    CONSTRAINT FKC_Article_to_ArticleCategory FOREIGN KEY (ArticleCategory_FK) REFERENCES Articlecategory (Id) ON DELETE NO ACTION ON UPDATE NO ACTION ) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;