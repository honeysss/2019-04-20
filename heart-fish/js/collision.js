// 大鱼和果实的碰撞检测
function momAndCollosion () {
	for (var i = 0; i < fruit.num; i ++) {
		// 存活状态并且已经长大
		if (fruit.isAlive[i] && fruit.l[i] >= fruitSize) {
			// 循环果实 如果大鱼和果实的距离小于一定的值 判断为大鱼吃到了果实 并且让把这个果实的状态设置为false
			if (calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y) < theNum) {


				// 吃到黄色果实
				if (fruit.fruitType[i].getAttribute('src') == '../img/fruit.png') {

					// 黄色的圈
					wave.born(fruit.x[i], fruit.y[i], 0);


					data.orangeFruitNum += 1;
					
					mom.fruitNum += 1;
					mom.fruitType = 0;
					// 如果身体值达到最大 停留在最大
					if (mom.orangeBodyCount == 7) {
						mom.orangeBodyCount = 7;
					} else {
						mom.orangeBodyCount = mom.orangeBodyCount + 1;
					}
					data.score += 10;
				}
				// 吃到绿色果实
				else {

					// 绿色的圈
					wave.born(fruit.x[i], fruit.y[i], 1);


					data.blueFruitNum += 1;
					
					mom.fruitType = 1;
					// 如果身体值达到最大 停留在最大
					// if (mom.blueBodyCount == 7) {
					// 	mom.blueBodyCount = 7;
					// } else {
					// 	mom.blueBodyCount = mom.blueBodyCount + 1;
					// }

					// 让分数等于当前大鱼吃到果实的数量乘以分数再乘二再加上原来的分数
					data.score = data.score + (mom.fruitNum*10)*2;
				}
				// fruit.dead(i);
				fruit.isAlive[i] = false;
			}
		}
		
	}
}


// 大鱼和小鱼的碰撞检测
function momAndBaby () {
	// 如果大鱼和小鱼的距离小于一定的值
	if (calLength2(mom.x, mom.y, baby.x, baby.y) < theNum) {
		if (mom.fruitNum > 7) {

			// 如果小鱼的身体值已满 让小鱼处于满值状态
			if (baby.bodyCount == 0) {
				baby.babyCount = 0;
			}
			// 否则
			else {
				feedWave.born(baby.x, baby.y);
				// 表示喂小鱼 让大于的身体值减一 小鱼的身体值加1
				
				mom.fruitNum -= 1;
				baby.bodyCount -= 1;
			}

		} else if (mom.fruitNum > 0 && mom.fruitNum <= 7) {
			// 如果小鱼的身体值已满 让小鱼处于满值状态
			if (baby.bodyCount == 0) {
				baby.babyCount = 0;
			}
			// 否则
			else {
				feedWave.born(baby.x, baby.y);
				// 表示喂小鱼 让大于的身体值减一 小鱼的身体值加1
				
				mom.fruitNum -= 1;
				mom.orangeBodyCount -= 1;
				baby.bodyCount -= 1;
			}
		} else if (mom.fruitNum == 0) {
			mom.fruitType = 0;
		}



	}
}