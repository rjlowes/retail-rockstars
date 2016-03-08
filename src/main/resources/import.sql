INSERT INTO country (id, name) VALUES('UK', 'United Kingdom');

INSERT INTO customer (id, fullname, title, firstname, lastname, telephone, email, password) VALUES (1, 'Mr John Smith', 'Mr', 'John', 'Smith','07788777666', 'username@test.com', '5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8');

-- INSERT INTO address (id, title, firstname, lastname, label, address1, town_city, country_id, postcode, customer_id) VALUES (1, 'Mr', 'User', 'Name', 'Home', 'Address Line 1', 'Testtown', 'UK', 'TE456ST', 1);
INSERT INTO address (id, fullname, title, firstname, lastname, label, address1, town_city, country, postcode, customer_id) VALUES (1, 'Mr John Smith', 'Mr', 'User', 'Name', 'Home', 'Address Line 1', 'Testtown', 'UK', 'TE456ST', 1);

INSERT INTO category (id, name) VALUES ('mens', 'Menswear');
INSERT INTO category (id, name) VALUES ('womens', 'Womenswear');

INSERT INTO product (id, title, description) VALUES (0, 'Icon Tee 0', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-0-red-sm', 'Red', 'S', 25.99, 0);
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-0-red-md', 'Red', 'M', 25.99, 0);
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-0-red-lg', 'Red', 'L', 25.99, 0);
INSERT INTO product_category(product_id, category_id) VALUES (0, 'mens');

INSERT INTO product (id, title, description) VALUES (1, 'Icon Tee 1', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-1-red-sm', 'Red', 'Small', 25.99, 1);
INSERT INTO product_category(product_id, category_id) VALUES (1, 'mens');

INSERT INTO product (id, title, description) VALUES (2, 'Icon Tee 2', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-2-red-sm', 'Red', 'Small', 25.99, 2);
INSERT INTO product_category(product_id, category_id) VALUES (2, 'mens');

INSERT INTO product (id, title, description) VALUES (3, 'Icon Tee 3', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-3-red-sm', 'Red', 'Small', 25.99, 3);
INSERT INTO product_category(product_id, category_id) VALUES (3, 'mens');

INSERT INTO product (id, title, description) VALUES (4, 'Icon Tee 4', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-4-red-sm', 'Red', 'Small', 25.99, 4);
INSERT INTO product_category(product_id, category_id) VALUES (4, 'mens');

INSERT INTO product (id, title, description) VALUES (5, 'Icon Tee 5', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-5-red-sm', 'Red', 'Small', 25.99, 5);
INSERT INTO product_category(product_id, category_id) VALUES (5, 'mens');

INSERT INTO product (id, title, description) VALUES (6, 'Icon Tee 6', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-6-red-sm', 'Red', 'Small', 25.99, 6);
INSERT INTO product_category(product_id, category_id) VALUES (6, 'mens');

INSERT INTO product (id, title, description) VALUES (7, 'Icon Tee 7', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-7-red-sm', 'Red', 'Small', 25.99, 7);
INSERT INTO product_category(product_id, category_id) VALUES (7, 'mens');

INSERT INTO product (id, title, description) VALUES (8, 'Icon Tee 8', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-8-red-sm', 'Red', 'Small', 25.99, 8);
INSERT INTO product_category(product_id, category_id) VALUES (8, 'mens');

INSERT INTO product (id, title, description) VALUES (9, 'Icon Tee 9', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-9-red-sm', 'Red', 'Small', 25.99, 9);
INSERT INTO product_category(product_id, category_id) VALUES (9, 'mens');

INSERT INTO product (id, title, description) VALUES (10, 'Icon Tee 10', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-10-red-sm', 'Red', 'Small', 25.99, 10);
INSERT INTO product_category(product_id, category_id) VALUES (10, 'mens');

INSERT INTO product (id, title, description) VALUES (11, 'Icon Tee 11', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-11-red-sm', 'Red', 'Small', 25.99, 11);
INSERT INTO product_category(product_id, category_id) VALUES (11, 'mens');

INSERT INTO product (id, title, description) VALUES (12, 'Icon Tee 12', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-12-red-sm', 'Red', 'Small', 25.99, 12);
INSERT INTO product_category(product_id, category_id) VALUES (12, 'mens');

INSERT INTO product (id, title, description) VALUES (13, 'Icon Tee 13', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-13-red-sm', 'Red', 'Small', 25.99, 13);
INSERT INTO product_category(product_id, category_id) VALUES (13, 'mens');

INSERT INTO product (id, title, description) VALUES (14, 'Icon Tee 14', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-14-red-sm', 'Red', 'Small', 25.99, 14);
INSERT INTO product_category(product_id, category_id) VALUES (14, 'mens');

INSERT INTO product (id, title, description) VALUES (15, 'Icon Tee 15', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-15-red-sm', 'Red', 'Small', 25.99, 15);
INSERT INTO product_category(product_id, category_id) VALUES (15, 'mens');

INSERT INTO product (id, title, description) VALUES (16, 'Icon Tee 16', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-16-red-sm', 'Red', 'Small', 25.99, 16);
INSERT INTO product_category(product_id, category_id) VALUES (16, 'mens');

INSERT INTO product (id, title, description) VALUES (17, 'Icon Tee 17', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-17-red-sm', 'Red', 'Small', 25.99, 17);
INSERT INTO product_category(product_id, category_id) VALUES (17, 'mens');

INSERT INTO product (id, title, description) VALUES (18, 'Icon Tee 18', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-18-red-sm', 'Red', 'Small', 25.99, 18);
INSERT INTO product_category(product_id, category_id) VALUES (18, 'mens');

INSERT INTO product (id, title, description) VALUES (19, 'Icon Tee 19', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-19-red-sm', 'Red', 'Small', 25.99, 19);
INSERT INTO product_category(product_id, category_id) VALUES (19, 'mens');

INSERT INTO product (id, title, description) VALUES (20, 'Icon Tee 20', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-20-red-sm', 'Red', 'Small', 25.99, 20);
INSERT INTO product_category(product_id, category_id) VALUES (20, 'mens');

INSERT INTO product (id, title, description) VALUES (21, 'Icon Tee 21', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-21-red-sm', 'Red', 'Small', 25.99, 21);
INSERT INTO product_category(product_id, category_id) VALUES (21, 'mens');

INSERT INTO product (id, title, description) VALUES (22, 'Icon Tee 22', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-22-red-sm', 'Red', 'Small', 25.99, 22);
INSERT INTO product_category(product_id, category_id) VALUES (22, 'mens');

INSERT INTO product (id, title, description) VALUES (23, 'Icon Tee 23', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-23-red-sm', 'Red', 'Small', 25.99, 23);
INSERT INTO product_category(product_id, category_id) VALUES (23, 'mens');

INSERT INTO product (id, title, description) VALUES (24, 'Icon Tee 24', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-24-red-sm', 'Red', 'Small', 25.99, 24);
INSERT INTO product_category(product_id, category_id) VALUES (24, 'mens');

INSERT INTO product (id, title, description) VALUES (25, 'Icon Tee 25', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-25-red-sm', 'Red', 'Small', 25.99, 25);
INSERT INTO product_category(product_id, category_id) VALUES (25, 'mens');

INSERT INTO product (id, title, description) VALUES (26, 'Icon Tee 26', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-26-red-sm', 'Red', 'Small', 25.99, 26);
INSERT INTO product_category(product_id, category_id) VALUES (26, 'mens');

INSERT INTO product (id, title, description) VALUES (27, 'Icon Tee 27', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-27-red-sm', 'Red', 'Small', 25.99, 27);
INSERT INTO product_category(product_id, category_id) VALUES (27, 'mens');

INSERT INTO product (id, title, description) VALUES (28, 'Icon Tee 28', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-28-red-sm', 'Red', 'Small', 25.99, 28);
INSERT INTO product_category(product_id, category_id) VALUES (28, 'mens');

INSERT INTO product (id, title, description) VALUES (29, 'Icon Tee 29', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-29-red-sm', 'Red', 'Small', 25.99, 29);
INSERT INTO product_category(product_id, category_id) VALUES (29, 'mens');

INSERT INTO product (id, title, description) VALUES (30, 'Icon Tee 30', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-30-red-sm', 'Red', 'Small', 25.99, 30);
INSERT INTO product_category(product_id, category_id) VALUES (30, 'mens');

INSERT INTO product (id, title, description) VALUES (31, 'Icon Tee 31', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-31-red-sm', 'Red', 'Small', 25.99, 31);
INSERT INTO product_category(product_id, category_id) VALUES (31, 'mens');

INSERT INTO product (id, title, description) VALUES (32, 'Icon Tee 32', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-32-red-sm', 'Red', 'Small', 25.99, 32);
INSERT INTO product_category(product_id, category_id) VALUES (32, 'mens');

INSERT INTO product (id, title, description) VALUES (33, 'Icon Tee 33', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-33-red-sm', 'Red', 'Small', 25.99, 33);
INSERT INTO product_category(product_id, category_id) VALUES (33, 'mens');

INSERT INTO product (id, title, description) VALUES (34, 'Icon Tee 34', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-34-red-sm', 'Red', 'Small', 25.99, 34);
INSERT INTO product_category(product_id, category_id) VALUES (34, 'mens');

INSERT INTO product (id, title, description) VALUES (35, 'Icon Tee 35', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-35-red-sm', 'Red', 'Small', 25.99, 35);
INSERT INTO product_category(product_id, category_id) VALUES (35, 'mens');

INSERT INTO product (id, title, description) VALUES (36, 'Icon Tee 36', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-36-red-sm', 'Red', 'Small', 25.99, 36);
INSERT INTO product_category(product_id, category_id) VALUES (36, 'mens');

INSERT INTO product (id, title, description) VALUES (37, 'Icon Tee 37', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-37-red-sm', 'Red', 'Small', 25.99, 37);
INSERT INTO product_category(product_id, category_id) VALUES (37, 'mens');

INSERT INTO product (id, title, description) VALUES (38, 'Icon Tee 38', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-38-red-sm', 'Red', 'Small', 25.99, 38);
INSERT INTO product_category(product_id, category_id) VALUES (38, 'mens');

INSERT INTO product (id, title, description) VALUES (39, 'Icon Tee 39', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-39-red-sm', 'Red', 'Small', 25.99, 39);
INSERT INTO product_category(product_id, category_id) VALUES (39, 'mens');

INSERT INTO product (id, title, description) VALUES (40, 'Icon Tee 40', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-40-red-sm', 'Red', 'Small', 25.99, 40);
INSERT INTO product_category(product_id, category_id) VALUES (40, 'mens');

INSERT INTO product (id, title, description) VALUES (41, 'Icon Tee 41', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-41-red-sm', 'Red', 'Small', 25.99, 41);
INSERT INTO product_category(product_id, category_id) VALUES (41, 'mens');

INSERT INTO product (id, title, description) VALUES (42, 'Icon Tee 42', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-42-red-sm', 'Red', 'Small', 25.99, 42);
INSERT INTO product_category(product_id, category_id) VALUES (42, 'mens');

INSERT INTO product (id, title, description) VALUES (43, 'Icon Tee 43', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-43-red-sm', 'Red', 'Small', 25.99, 43);
INSERT INTO product_category(product_id, category_id) VALUES (43, 'mens');

INSERT INTO product (id, title, description) VALUES (44, 'Icon Tee 44', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-44-red-sm', 'Red', 'Small', 25.99, 44);
INSERT INTO product_category(product_id, category_id) VALUES (44, 'mens');

INSERT INTO product (id, title, description) VALUES (45, 'Icon Tee 45', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-45-red-sm', 'Red', 'Small', 25.99, 45);
INSERT INTO product_category(product_id, category_id) VALUES (45, 'mens');

INSERT INTO product (id, title, description) VALUES (46, 'Icon Tee 46', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-46-red-sm', 'Red', 'Small', 25.99, 46);
INSERT INTO product_category(product_id, category_id) VALUES (46, 'mens');

INSERT INTO product (id, title, description) VALUES (47, 'Icon Tee 47', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-47-red-sm', 'Red', 'Small', 25.99, 47);
INSERT INTO product_category(product_id, category_id) VALUES (47, 'mens');

INSERT INTO product (id, title, description) VALUES (48, 'Icon Tee 48', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-48-red-sm', 'Red', 'Small', 25.99, 48);
INSERT INTO product_category(product_id, category_id) VALUES (48, 'mens');

INSERT INTO product (id, title, description) VALUES (49, 'Icon Tee 49', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-49-red-sm', 'Red', 'Small', 25.99, 49);
INSERT INTO product_category(product_id, category_id) VALUES (49, 'mens');

INSERT INTO product (id, title, description) VALUES (50, 'Icon Tee 50', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-50-red-sm', 'Red', 'Small', 25.99, 50);
INSERT INTO product_category(product_id, category_id) VALUES (50, 'mens');

INSERT INTO product (id, title, description) VALUES (51, 'Icon Tee 51', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-51-red-sm', 'Red', 'Small', 25.99, 51);
INSERT INTO product_category(product_id, category_id) VALUES (51, 'mens');

INSERT INTO product (id, title, description) VALUES (52, 'Icon Tee 52', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-52-red-sm', 'Red', 'Small', 25.99, 52);
INSERT INTO product_category(product_id, category_id) VALUES (52, 'mens');

INSERT INTO product (id, title, description) VALUES (53, 'Icon Tee 53', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-53-red-sm', 'Red', 'Small', 25.99, 53);
INSERT INTO product_category(product_id, category_id) VALUES (53, 'mens');

INSERT INTO product (id, title, description) VALUES (54, 'Icon Tee 54', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-54-red-sm', 'Red', 'Small', 25.99, 54);
INSERT INTO product_category(product_id, category_id) VALUES (54, 'mens');

INSERT INTO product (id, title, description) VALUES (55, 'Icon Tee 55', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-55-red-sm', 'Red', 'Small', 25.99, 55);
INSERT INTO product_category(product_id, category_id) VALUES (55, 'mens');

INSERT INTO product (id, title, description) VALUES (56, 'Icon Tee 56', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-56-red-sm', 'Red', 'Small', 25.99, 56);
INSERT INTO product_category(product_id, category_id) VALUES (56, 'mens');

INSERT INTO product (id, title, description) VALUES (57, 'Icon Tee 57', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-57-red-sm', 'Red', 'Small', 25.99, 57);
INSERT INTO product_category(product_id, category_id) VALUES (57, 'mens');

INSERT INTO product (id, title, description) VALUES (58, 'Icon Tee 58', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-58-red-sm', 'Red', 'Small', 25.99, 58);
INSERT INTO product_category(product_id, category_id) VALUES (58, 'mens');

INSERT INTO product (id, title, description) VALUES (59, 'Icon Tee 59', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-59-red-sm', 'Red', 'Small', 25.99, 59);
INSERT INTO product_category(product_id, category_id) VALUES (59, 'mens');

INSERT INTO product (id, title, description) VALUES (60, 'Icon Tee 60', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-60-red-sm', 'Red', 'Small', 25.99, 60);
INSERT INTO product_category(product_id, category_id) VALUES (60, 'mens');

INSERT INTO product (id, title, description) VALUES (61, 'Icon Tee 61', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-61-red-sm', 'Red', 'Small', 25.99, 61);
INSERT INTO product_category(product_id, category_id) VALUES (61, 'mens');

INSERT INTO product (id, title, description) VALUES (62, 'Icon Tee 62', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-62-red-sm', 'Red', 'Small', 25.99, 62);
INSERT INTO product_category(product_id, category_id) VALUES (62, 'mens');

INSERT INTO product (id, title, description) VALUES (63, 'Icon Tee 63', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-63-red-sm', 'Red', 'Small', 25.99, 63);
INSERT INTO product_category(product_id, category_id) VALUES (63, 'mens');

INSERT INTO product (id, title, description) VALUES (64, 'Icon Tee 64', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-64-red-sm', 'Red', 'Small', 25.99, 64);
INSERT INTO product_category(product_id, category_id) VALUES (64, 'mens');

INSERT INTO product (id, title, description) VALUES (65, 'Icon Tee 65', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-65-red-sm', 'Red', 'Small', 25.99, 65);
INSERT INTO product_category(product_id, category_id) VALUES (65, 'mens');

INSERT INTO product (id, title, description) VALUES (66, 'Icon Tee 66', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-66-red-sm', 'Red', 'Small', 25.99, 66);
INSERT INTO product_category(product_id, category_id) VALUES (66, 'mens');

INSERT INTO product (id, title, description) VALUES (67, 'Icon Tee 67', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-67-red-sm', 'Red', 'Small', 25.99, 67);
INSERT INTO product_category(product_id, category_id) VALUES (67, 'mens');

INSERT INTO product (id, title, description) VALUES (68, 'Icon Tee 68', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-68-red-sm', 'Red', 'Small', 25.99, 68);
INSERT INTO product_category(product_id, category_id) VALUES (68, 'mens');

INSERT INTO product (id, title, description) VALUES (69, 'Icon Tee 69', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-69-red-sm', 'Red', 'Small', 25.99, 69);
INSERT INTO product_category(product_id, category_id) VALUES (69, 'mens');

INSERT INTO product (id, title, description) VALUES (70, 'Icon Tee 70', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-70-red-sm', 'Red', 'Small', 25.99, 70);
INSERT INTO product_category(product_id, category_id) VALUES (70, 'mens');

INSERT INTO product (id, title, description) VALUES (71, 'Icon Tee 71', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-71-red-sm', 'Red', 'Small', 25.99, 71);
INSERT INTO product_category(product_id, category_id) VALUES (71, 'mens');

INSERT INTO product (id, title, description) VALUES (72, 'Icon Tee 72', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-72-red-sm', 'Red', 'Small', 25.99, 72);
INSERT INTO product_category(product_id, category_id) VALUES (72, 'mens');

INSERT INTO product (id, title, description) VALUES (73, 'Icon Tee 73', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-73-red-sm', 'Red', 'Small', 25.99, 73);
INSERT INTO product_category(product_id, category_id) VALUES (73, 'mens');

INSERT INTO product (id, title, description) VALUES (74, 'Icon Tee 74', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-74-red-sm', 'Red', 'Small', 25.99, 74);
INSERT INTO product_category(product_id, category_id) VALUES (74, 'mens');

INSERT INTO product (id, title, description) VALUES (75, 'Icon Tee 75', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-75-red-sm', 'Red', 'Small', 25.99, 75);
INSERT INTO product_category(product_id, category_id) VALUES (75, 'mens');

INSERT INTO product (id, title, description) VALUES (76, 'Icon Tee 76', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-76-red-sm', 'Red', 'Small', 25.99, 76);
INSERT INTO product_category(product_id, category_id) VALUES (76, 'mens');

INSERT INTO product (id, title, description) VALUES (77, 'Icon Tee 77', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-77-red-sm', 'Red', 'Small', 25.99, 77);
INSERT INTO product_category(product_id, category_id) VALUES (77, 'mens');

INSERT INTO product (id, title, description) VALUES (78, 'Icon Tee 78', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-78-red-sm', 'Red', 'Small', 25.99, 78);
INSERT INTO product_category(product_id, category_id) VALUES (78, 'mens');

INSERT INTO product (id, title, description) VALUES (79, 'Icon Tee 79', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-79-red-sm', 'Red', 'Small', 25.99, 79);
INSERT INTO product_category(product_id, category_id) VALUES (79, 'mens');

INSERT INTO product (id, title, description) VALUES (80, 'Icon Tee 80', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-80-red-sm', 'Red', 'Small', 25.99, 80);
INSERT INTO product_category(product_id, category_id) VALUES (80, 'mens');

INSERT INTO product (id, title, description) VALUES (81, 'Icon Tee 81', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-81-red-sm', 'Red', 'Small', 25.99, 81);
INSERT INTO product_category(product_id, category_id) VALUES (81, 'mens');

INSERT INTO product (id, title, description) VALUES (82, 'Icon Tee 82', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-82-red-sm', 'Red', 'Small', 25.99, 82);
INSERT INTO product_category(product_id, category_id) VALUES (82, 'mens');

INSERT INTO product (id, title, description) VALUES (83, 'Icon Tee 83', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-83-red-sm', 'Red', 'Small', 25.99, 83);
INSERT INTO product_category(product_id, category_id) VALUES (83, 'mens');

INSERT INTO product (id, title, description) VALUES (84, 'Icon Tee 84', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-84-red-sm', 'Red', 'Small', 25.99, 84);
INSERT INTO product_category(product_id, category_id) VALUES (84, 'mens');

INSERT INTO product (id, title, description) VALUES (85, 'Icon Tee 85', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-85-red-sm', 'Red', 'Small', 25.99, 85);
INSERT INTO product_category(product_id, category_id) VALUES (85, 'mens');

INSERT INTO product (id, title, description) VALUES (86, 'Icon Tee 86', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-86-red-sm', 'Red', 'Small', 25.99, 86);
INSERT INTO product_category(product_id, category_id) VALUES (86, 'mens');

INSERT INTO product (id, title, description) VALUES (87, 'Icon Tee 87', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-87-red-sm', 'Red', 'Small', 25.99, 87);
INSERT INTO product_category(product_id, category_id) VALUES (87, 'mens');

INSERT INTO product (id, title, description) VALUES (88, 'Icon Tee 88', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-88-red-sm', 'Red', 'Small', 25.99, 88);
INSERT INTO product_category(product_id, category_id) VALUES (88, 'mens');

INSERT INTO product (id, title, description) VALUES (89, 'Icon Tee 89', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-89-red-sm', 'Red', 'Small', 25.99, 89);
INSERT INTO product_category(product_id, category_id) VALUES (89, 'mens');

INSERT INTO product (id, title, description) VALUES (90, 'Icon Tee 90', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-90-red-sm', 'Red', 'Small', 25.99, 90);
INSERT INTO product_category(product_id, category_id) VALUES (90, 'mens');

INSERT INTO product (id, title, description) VALUES (91, 'Icon Tee 91', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-91-red-sm', 'Red', 'Small', 25.99, 91);
INSERT INTO product_category(product_id, category_id) VALUES (91, 'mens');

INSERT INTO product (id, title, description) VALUES (92, 'Icon Tee 92', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-92-red-sm', 'Red', 'Small', 25.99, 92);
INSERT INTO product_category(product_id, category_id) VALUES (92, 'mens');

INSERT INTO product (id, title, description) VALUES (93, 'Icon Tee 93', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-93-red-sm', 'Red', 'Small', 25.99, 93);
INSERT INTO product_category(product_id, category_id) VALUES (93, 'mens');

INSERT INTO product (id, title, description) VALUES (94, 'Icon Tee 94', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-94-red-sm', 'Red', 'Small', 25.99, 94);
INSERT INTO product_category(product_id, category_id) VALUES (94, 'mens');

INSERT INTO product (id, title, description) VALUES (95, 'Icon Tee 95', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-95-red-sm', 'Red', 'Small', 25.99, 95);
INSERT INTO product_category(product_id, category_id) VALUES (95, 'mens');

INSERT INTO product (id, title, description) VALUES (96, 'Icon Tee 96', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-96-red-sm', 'Red', 'Small', 25.99, 96);
INSERT INTO product_category(product_id, category_id) VALUES (96, 'mens');

INSERT INTO product (id, title, description) VALUES (97, 'Icon Tee 97', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-97-red-sm', 'Red', 'Small', 25.99, 97);
INSERT INTO product_category(product_id, category_id) VALUES (97, 'mens');

INSERT INTO product (id, title, description) VALUES (98, 'Icon Tee 98', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-98-red-sm', 'Red', 'Small', 25.99, 98);
INSERT INTO product_category(product_id, category_id) VALUES (98, 'mens');

INSERT INTO product (id, title, description) VALUES (99, 'Icon Tee 99', '');
INSERT INTO variant (sku, colour, size, price, product_id) VALUES ('icon-tee-99-red-sm', 'Red', 'Small', 25.99, 99);
INSERT INTO product_category(product_id, category_id) VALUES (99, 'mens');

