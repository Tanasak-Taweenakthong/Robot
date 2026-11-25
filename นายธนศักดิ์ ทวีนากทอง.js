const fs = require('fs');

// อ่านไฟล์ที่ 1: head.txt
fs.readFile('head.txt', 'utf8', (err, headData) => {
  if (err) throw err;

  // อ่านไฟล์ที่ 2: body.txt
  fs.readFile('body.txt', 'utf8', (err, bodyData) => {
    if (err) throw err;

    // อ่านไฟล์ที่ 3: leg.txt
    fs.readFile('leg.txt', 'utf8', (err, legData) => {
      if (err) throw err;

      // อ่านไฟล์ที่ 4: feet.txt
      fs.readFile('feet.txt', 'utf8', (err, feetData) => {
        if (err) throw err;

        // นำข้อความจากทั้ง 4 ไฟล์มาต่อกัน โดยคั่นด้วยการขึ้นบรรทัดใหม่ (\n)
        const result = `${headData}\n${bodyData}\n${legData}\n${feetData}`;

        // เขียนลงไฟล์ใหม่ชื่อ robot.txt
        fs.writeFile('robot.txt', result, (err) => {
          if (err) throw err;
          console.log('สร้างไฟล์ robot.txt สำเร็จ!');
        });
      });
    });
  });
});