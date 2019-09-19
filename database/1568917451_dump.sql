-- MySQL dump 10.13  Distrib 5.7.27, for Linux (x86_64)
--
-- Host: localhost    Database: adMe
-- ------------------------------------------------------
-- Server version	5.7.27-0ubuntu0.18.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `campaigns`
--

DROP TABLE IF EXISTS `campaigns`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `campaigns` (
  `campaignID` int(11) NOT NULL AUTO_INCREMENT,
  `companyID` int(11) NOT NULL,
  `campaignTitle` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preferredContentType` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `requirements` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `runSpace` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rewards` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `submissionsReceived` int(11) NOT NULL,
  `campaignContent` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `timeCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`campaignID`),
  KEY `companyID` (`companyID`),
  CONSTRAINT `campaigns_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `companies` (`companyID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `campaigns`
--

LOCK TABLES `campaigns` WRITE;
/*!40000 ALTER TABLE `campaigns` DISABLE KEYS */;
INSERT INTO `campaigns` VALUES (1,1,'Targetti','Targetti\'s new pasta is infused with Alfredo sauce and Parmesan for the ultimate flavor. Ingredients... ','video','A 15 second video with a humorous touch','For a 6 month Facebook video ad campaign','$1,000',0,'uploads/2019-09-10T23:54:23.650Zlemon-lime.png','2019-09-10 23:39:02'),(2,1,'LearningFuze','The cool kid bootcamp where you can learn cool stuff. JavaScript React PhP Node. You name it we got it. It\'s the obvious choice','video','A 30 second video illustrating why somebody should choose this coding bootcamp over the lesser competitors  ','History channel video ad','$500',0,'/mnt/c/Users/smcgr/lfz/c619_adme/server/public/uploads/2019-09-10T23:55:21.303Zlemon-lime.png','2019-09-10 23:39:02'),(5,2,'Penguin Land','Advertisement to show the heart behind why we love penguins.','Video','Must be a video between 60 seconds and 3 minutes long','Channel 5 News','$10,000',0,'/home/dev/lfz/c619_adme/server/public/uploads/2019-09-13T23:10:51.592ZPenguinCampaign.jpg','2019-09-13 23:10:51'),(6,3,'Tampax Pearl','This will clog you up nice no running','Video','Video 15 to 60 seconds long','Youtube Ads','$15,000',0,'/home/dev/lfz/c619_adme/server/public/uploads/2019-09-18T00:05:24.759ZTampaxPearl.jpeg','2019-09-18 00:05:24'),(7,4,'Volkswagen Dachsund 1998','This new vehicle possesses power while maintaining stability and control','Video','At least a 30 second long ad that has a touch of humor. Must make this vehicle seem like must have.','SuperBowl commercial','$100,000',0,'/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T04:19:08.099ZVolkswagenCampaign Thumb.jpeg','2019-09-19 04:19:08'),(8,5,'Spear TM','We are searching for new talent in the music industry. Show us what you got.','Video','Must be a video of you showing us your musical talent.','TM Productions website','Record Deal with our Producing Company',0,'/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T04:55:44.448ZspearCampaignTM.jpg','2019-09-19 04:55:44');
/*!40000 ALTER TABLE `campaigns` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `companies` (
  `companyID` int(11) NOT NULL AUTO_INCREMENT,
  `companyName` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyLogo` varchar(150) COLLATE utf8mb4_unicode_ci NOT NULL,
  `companyType` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`companyID`),
  UNIQUE KEY `companyName` (`companyName`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Target','https://www.aiga.org/globalassets/aiga/content/inspiration/corporate-awards/2006-target/target_header.png','Super Store'),(2,'San Diego Zoo ','https://upload.wikimedia.org/wikipedia/commons/b/bb/San_Diego_Zoo_Street_Sign.jpg','Zoo'),(3,'Tampax','https://www.redbrick.me/wp-content/uploads/2018/10/Tampons-3.jpg','Feminine Hygiene'),(4,'Volkswagen','https://cdn.motor1.com/images/mgl/pqj8V/s3/logo-story-volkswagen.jpg','Automotives'),(5,'TM Productions','https://static1.squarespace.com/static/586b3e01f7e0ab61f652a086/t/5a713f669140b79f3b7d1006/1550201061879/?format=1500w','Music Producer');
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `creators`
--

DROP TABLE IF EXISTS `creators`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `creators` (
  `creatorID` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `first_name` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `last_name` varchar(15) COLLATE utf8mb4_unicode_ci NOT NULL,
  `bio` varchar(2000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `profilePicture` varchar(500) COLLATE utf8mb4_unicode_ci NOT NULL,
  PRIMARY KEY (`creatorID`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `creators`
--

LOCK TABLES `creators` WRITE;
/*!40000 ALTER TABLE `creators` DISABLE KEYS */;
INSERT INTO `creators` VALUES (1,'daniel-paschal@gmail.com','Daniel','Paschal','My name is Daniel Wayne Paschal and I am the best server & client engineer to ever bless this planet.','https://learningfuze.com/blog/wp-content/uploads/2014/12/Dan420x280.jpg'),(2,'smcgrath11@gmail.com','Shane','McGrath','I\'m dope. I like dope. Dooooope','https://upload.wikimedia.org/wikipedia/commons/7/75/Adrian_Dullard_%28before_1949%29.jpg'),(3,'samantha.durant11@gmail.com','Sam','Durant','I love penguins they\'re so cute. Monkeys are in the uncanny valley so I cant look at them without being uneasy','https://media.licdn.com/dms/image/C5603AQEA6zqworIphw/profile-displayphoto-shrink_800_800/0?e=1573689600&v=beta&t=AXwFjebIFLpVH7tGQJCToCN27c2_iaXu5Ugn-2-VjJ4'),(4,'john_south@live.com','John','South','My name is John South, and I like the gym and sleeping. And I code sometimes','https://scontent-lax3-2.xx.fbcdn.net/v/t1.0-9/70451355_3599604646723680_6604829316565958656_n.jpg?_nc_cat=106&_nc_oc=AQlviRwspyP2TeABuJVcCVW6HyknzGWtuZkhbjjMCN0QiqDUo7Mh18UsqbGAK7XBHS0&_nc_ht=scontent-lax3-2.xx&oh=04470fe83deef067eb23fcf2d2485f7c&oe=5E3AAEBD'),(5,'rachaelyamagata@gmail.com','Rachael','Yamagata','I am Rachael Yamagata. The long lost sister of James Yamagata. I\'m a singer-songwriter currently touring in U.S. and Asia','https://todaytix.imgix.net/prod_1549647570663_Show+Image+-rachel.png');
/*!40000 ALTER TABLE `creators` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `requests` (
  `requestID` int(11) NOT NULL AUTO_INCREMENT,
  `companyID` int(11) NOT NULL,
  `title` varchar(100) COLLATE utf8mb4_unicode_ci NOT NULL,
  `description` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `preferredContentType` varchar(30) COLLATE utf8mb4_unicode_ci NOT NULL,
  `requirements` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `runSpace` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `rewards` varchar(1000) COLLATE utf8mb4_unicode_ci NOT NULL,
  `submissionsReceived` int(11) NOT NULL,
  `campaignContent` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`requestID`),
  KEY `companyID` (`companyID`),
  CONSTRAINT `requests_ibfk_1` FOREIGN KEY (`companyID`) REFERENCES `companies` (`companyID`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (1,1,'Targetti','Targetti make an add for this new pasta brilliance ','video','Just do it','MySpace','$1',0,''),(2,1,'Sock Galore','Give me the socks!','video','B.A. in Marketing','Facebook','$1',0,'/mnt/c/Users/smcgr/lfz/c619_adme/server/public/uploads/2019-09-07T18:38:23.852Znodejs.png'),(3,1,'Peanuts','Peanut Sauce','video','Must be a video that shows love for peanuts','MySpace','$4',1,'/home/dev/lfz/c619_adme/server/public/uploads/2019-09-10T19:24:40.290Zkool-aid.jpg');
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `submissions`
--

DROP TABLE IF EXISTS `submissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `submissions` (
  `submissionID` int(11) NOT NULL AUTO_INCREMENT,
  `creatorID` int(11) NOT NULL,
  `typeOfContent` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `submissionThumbnail` varchar(200) COLLATE utf8mb4_unicode_ci NOT NULL,
  `submissionContent` varchar(300) COLLATE utf8mb4_unicode_ci NOT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `campaignID` int(11) NOT NULL,
  `likes` int(11) NOT NULL,
  `submissionDescription` text COLLATE utf8mb4_unicode_ci NOT NULL,
  `timeCreated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`submissionID`),
  KEY `creatorID` (`creatorID`),
  KEY `requestID` (`campaignID`),
  CONSTRAINT `submissions_ibfk_1` FOREIGN KEY (`creatorID`) REFERENCES `creators` (`creatorID`),
  CONSTRAINT `submissions_ibfk_2` FOREIGN KEY (`campaignID`) REFERENCES `campaigns` (`campaignID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `submissions`
--

LOCK TABLES `submissions` WRITE;
/*!40000 ALTER TABLE `submissions` DISABLE KEYS */;
INSERT INTO `submissions` VALUES (3,1,'video','/home/dev/lfz/c619_adme/server/public/uploads/lfzPic.png','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-13T22:34:02.302ZlearningFuzeVideo.mp4','Fail Faster',2,0,'This fantastic ad clearly illustrates why LearninFuze is the best coding school ever. \n','2019-09-13 22:34:02'),(4,3,'video','/home/dev/lfz/c619_adme/server/public/uploads/cutePenguin.jpg','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-13T23:12:59.503ZCute overload as Penguin Snow Chick takes his first steps. With Kate Winslet.mp4','Cute Penguin Overload',5,0,'I traveled to antarctica to live amonst the penguins. In the summer they hatched their young and this is what I found.\n','2019-09-13 23:13:00'),(7,3,'Video','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T03:49:25.011ZtampaxSubmissionThumbnail.jpeg','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T03:49:24.950ZTampaxCommercial.mp4','Tampaxia',6,0,'This 37 second ad illustrates why Tampax Pearl is the pearl of all female supplies','2019-09-19 03:49:25'),(8,4,'Video','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T04:02:49.818ZTargetti.png','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T04:02:49.771ZAnthonyKnowsTargetti.mp4','Anthony Knows Targetti',1,0,'Anthony knows one thing in the Italian district at the north end of Boston. He knows one thing only... Targetti','2019-09-19 04:02:49'),(9,2,'Video','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T04:30:17.488ZVolkwagenSubmissionThumb.jpg','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T04:30:17.423Zvolkswagen.mp4','My Grandmother\'s Dachshund',7,0,'The new 1988 Volkswagen Dachshund is so fun, even your grandmother can\'t be trusted with it.','2019-09-19 04:30:17'),(10,5,'Video','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T05:01:34.833ZRachaelYamagataSubThump.jpg','/home/dev/lfz/c619_adme/server/public/uploads/2019-09-19T05:01:34.483ZrachaelSub.mp4','Be Your Love',8,0,'Here is video of my recent performance. Enjoy','2019-09-19 05:01:34');
/*!40000 ALTER TABLE `submissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `winningAds`
--

DROP TABLE IF EXISTS `winningAds`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `winningAds` (
  `submissionID` int(11) NOT NULL,
  `campaignID` int(11) NOT NULL,
  KEY `submissionID` (`submissionID`),
  KEY `campaignID` (`campaignID`),
  CONSTRAINT `winningAds_ibfk_1` FOREIGN KEY (`submissionID`) REFERENCES `submissions` (`submissionID`),
  CONSTRAINT `winningAds_ibfk_2` FOREIGN KEY (`campaignID`) REFERENCES `campaigns` (`campaignID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `winningAds`
--

LOCK TABLES `winningAds` WRITE;
/*!40000 ALTER TABLE `winningAds` DISABLE KEYS */;
INSERT INTO `winningAds` VALUES (10,8);
/*!40000 ALTER TABLE `winningAds` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-09-19 18:24:11
