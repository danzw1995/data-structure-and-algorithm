/**
 *   1．创建一个记录学生成绩的对象，
 *   提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。
*/

class Student {
  constructor (name) {
    this.name = name;
    this.subjects = [];
  }
  addSubject (subject, score) {
    this.subjects.push({ 
      subject,
      score
    })
  }
  average () {
    if (!this.subjects.length) {
      return 0;
    }
    return this.subjects.reduce((sum, subject) => {
      return sum += subject.score;
    }, 0) / this.subjects.length;
  }
}

let student = new Student('John');
student.addSubject('Math', 95);
student.addSubject('English', 66);
student.addSubject('Music', 80);
console.log(student.average());

/**
 * 2．将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。
 */

 let arr1 = ['hello', 'world', 'javascript', 'study', 'endless'];

 console.log(arr1);
 console.log(arr1.map((word) => word.split('').reverse().join('')));


 /**
  * 3．修改本章前面出现过的weeklyTemps对象
  * 使它可以使用一个二维数组来存储每月的有用数据。
  * 增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数。
  */
 class WeekTemps {
    constructor () {
      this.dataStore = [];
    }
    add (week, temp) {
      if (!this.dataStore[week]) {
        this.dataStore[week] = [];
      }
      this.dataStore[week].push(temp);
    }
    averageMonth () {
      if (!this.dataStore.length) {
        return 0;
      }
      return this.dataStore.reduce((sum, weekList) => {
        let result = this.average(weekList);
        return sum + result;
      }, 0) / this.dataStore.length;
    }
    averageWeek (week) {
      return this.average(this.dataStore[week])
    }
    average (list) {
      if (!list ||!list.length) {
        return 0;
      }
      return list.reduce((sum, temp) => {
        return sum + temp;
      }, 0) / list.length;
    }
 }


 /**
  * 创建这样一个对象
  * 它将字母存储在一个数组中
  * 并且用一个方法可以将字母连在一起，显示成一个单词
  */

  class Letter {
    constructor () {
      this.letters = []
    }
    add (letter) {
      this.letters.push(letter)
    }
    createWord (fn) {
      return fn.call(null, this.letters.splice(0, this.letter.length))
    }
  }

  let letter = new Letter();
  letter.add('a');
  letter.add('b');
  letter.add('c');
  letter.add('d');
  console.log(letter.createWord((letters) => {
    return letters.join('')
  }));
  console.log(letter.createWord((letters) => {
    return letters.reverse().join('')
  }))

