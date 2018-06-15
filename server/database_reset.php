<?php
$PAGEACCESS = TRUE;
require_once('mysqlcredentials.php');

$reset = "
SET SQL_MODE = \"NO_AUTO_VALUE_ON_ZERO\";
SET time_zone = \"+00:00\";

DROP TABLE IF EXISTS `students`;
CREATE TABLE `students` (
  `ID` int(10) UNSIGNED NOT NULL,
  `name` varchar(100) NOT NULL,
  `course` varchar(100) NOT NULL,
  `grade` tinyint(3) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

INSERT INTO `students` (`ID`, `name`, `course`, `grade`) VALUES
(1, 'Jessie James', 'UI/UX ', 90),
(2, 'Tim Horist ', 'Backend', 35),
(3, 'Bretty Boschoff', 'Asking Questions ', 90),
(4, 'Spencer Anderson', 'PHP', 65),
(5, 'Ryan soto', 'Typescript', 85),
(6, 'Lisa Chung', 'punctual', 90),
(7, 'Dona Anda ', 'Python', 85),
(8, 'Katy Deng', 'dressing nice', 100),
(9, 'Howard Kim', 'Helping others', 100),
(10, 'Lebron James', 'GOAT', 100),
(11, 'Tiger Woods', 'Golf', 60),
(12, 'Evan Ipotole', 'Web Design ', 80),
(13, 'Dan Pascal', 'Teaching', 100),
(14, 'JeanPaul Olukemi', 'Web Developer ', 95),
(15, 'Keith Scoith', 'ReactJS', 85),
(16, 'Sam Skarvan', 'NodeJS', 65),
(17, 'Vincent Tang', 'MEAN stack', 80),
(18, 'Marshawn Lynch ', 'Running Back', 20),
(19, 'Tom Brady', 'Quaterback', 100),
(21, 'Brandon Cartwright', 'Adobe Photoshop', 80),
(22, 'Bora Choi', 'Super cool', 100),
(60, 'jessie james lil sister', 'kickass', 100);


ALTER TABLE `students`
  ADD PRIMARY KEY (`ID`);


ALTER TABLE `students`
  MODIFY `ID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=65;

";


echo 'success: ' . mysqli_multi_query( $conn, $reset) . "\n";

echo mysqli_error($conn);

?>