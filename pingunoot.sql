/*
 Navicat Premium Data Transfer

 Source Server         : jc
 Source Server Type    : MySQL
 Source Server Version : 100422
 Source Host           : localhost:3306
 Source Schema         : pingunoot

 Target Server Type    : MySQL
 Target Server Version : 100422
 File Encoding         : 65001

 Date: 08/11/2023 03:45:22
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for meme_list
-- ----------------------------
DROP TABLE IF EXISTS `meme_list`;
CREATE TABLE `meme_list`  (
  `idx` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `title` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `img` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `count` int UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 15 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of meme_list
-- ----------------------------
INSERT INTO `meme_list` VALUES (1, 'meme1', '/assets/img/pingu/pingu1.jpg', 0);
INSERT INTO `meme_list` VALUES (2, 'meme2', '/assets/img/pingu/pingu2.jpg', 2);
INSERT INTO `meme_list` VALUES (3, 'meme3', '/assets/img/pingu/pingu3.jpg', 1);
INSERT INTO `meme_list` VALUES (4, 'meme4', '/assets/img/pingu/pingu4.jpg', 1);
INSERT INTO `meme_list` VALUES (5, 'meme5', '/assets/img/pingu/pingu5.jpg', 0);
INSERT INTO `meme_list` VALUES (6, 'meme6', '/assets/img/pingu/pingu6.jpg', 1);
INSERT INTO `meme_list` VALUES (7, 'meme7', '/assets/img/pingu/pingu7.jpg', NULL);
INSERT INTO `meme_list` VALUES (8, 'meme8', '/assets/img/pingu/pingu8.jpg', 0);
INSERT INTO `meme_list` VALUES (9, 'meme9', '/assets/img/pingu/pingu9.jpg', 1);
INSERT INTO `meme_list` VALUES (10, 'meme10', '/assets/img/pingu/pingu10.jpg', 0);
INSERT INTO `meme_list` VALUES (11, 'meme11', '/assets/img/pingu/pingu11.jpg', NULL);
INSERT INTO `meme_list` VALUES (12, 'meme12', '/assets/img/pingu/pingu12.jpg', 0);
INSERT INTO `meme_list` VALUES (13, 'meme13', '/assets/img/pingu/pingu13.jpg', 0);
INSERT INTO `meme_list` VALUES (14, 'meme14', '/assets/img/pingu/pingu14.jpg', 1);

-- ----------------------------
-- Table structure for vote
-- ----------------------------
DROP TABLE IF EXISTS `vote`;
CREATE TABLE `vote`  (
  `idx` int UNSIGNED NOT NULL AUTO_INCREMENT,
  `ip` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `type` varchar(255) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `time` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `vote` int UNSIGNED NULL DEFAULT NULL,
  PRIMARY KEY (`idx`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 73 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of vote
-- ----------------------------
INSERT INTO `vote` VALUES (27, '192.168.135.171', '2', '2023-11-08 02:37:56', 1);
INSERT INTO `vote` VALUES (61, '192.168.135.164', '6', '2023-11-08 03:12:36', 1);
INSERT INTO `vote` VALUES (62, '192.168.135.174', '4', '2023-11-08 03:16:57', 1);
INSERT INTO `vote` VALUES (63, '192.168.135.174', '3', '2023-11-08 03:16:59', 1);
INSERT INTO `vote` VALUES (65, '192.168.135.174', '2', '2023-11-08 03:17:03', 1);
INSERT INTO `vote` VALUES (66, '192.168.135.174', '9', '2023-11-08 03:17:47', 1);
INSERT INTO `vote` VALUES (72, '192.168.135.164', '14', '2023-11-08 03:32:29', 1);

SET FOREIGN_KEY_CHECKS = 1;
