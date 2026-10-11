const { MongoClient } = require("mongodb");

const url = "mongodb://127.0.0.1:27017";
const client = new MongoClient(url);

async function main() {
  try {
    await client.connect();
    console.log("MongoDB connected successfully!");

    const db = client.db("studentDB");
    const students = db.collection("students");
    const grades = db.collection("grades");

    // Clear old practice data
    await students.deleteMany({});
    await grades.deleteMany({});

    // Insert students
    await students.insertMany([
      { _id: 1, name: "Manoj", department: "CSE", year: 3 },
      { _id: 2, name: "Rahul", department: "IT", year: 3 },
      { _id: 3, name: "Priya", department: "CSE", year: 2 }
    ]);

    // Insert student grades
    await grades.insertMany([
      { studentId: 1, subject: "DBMS", marks: 85, semester: 5 },
      { studentId: 1, subject: "Java", marks: 90, semester: 5 },
      { studentId: 1, subject: "OS", marks: 75, semester: 5 },
      { studentId: 2, subject: "DBMS", marks: 70, semester: 5 },
      { studentId: 2, subject: "Java", marks: 80, semester: 5 },
      { studentId: 3, subject: "DBMS", marks: 95, semester: 3 },
      { studentId: 3, subject: "OS", marks: 88, semester: 3 }
    ]);

    console.log("\nStudents and grades inserted!");

    // Aggregate student grades
    const result = await grades.aggregate([
      {
        $group: {
          _id: "$studentId",
          averageMarks: { $avg: "$marks" },
          highestMarks: { $max: "$marks" },
          lowestMarks: { $min: "$marks" },
          totalSubjects: { $sum: 1 }
        }
      },
      {
        $lookup: {
          from: "students",
          localField: "_id",
          foreignField: "_id",
          as: "student"
        }
      },
      { $unwind: "$student" },
      {
        $project: {
          _id: 0,
          studentName: "$student.name",
          department: "$student.department",
          averageMarks: { $round: ["$averageMarks", 2] },
          highestMarks: 1,
          lowestMarks: 1,
          totalSubjects: 1
        }
      },
      { $sort: { averageMarks: -1 } }
    ]).toArray();

    console.log("\nSTUDENT GRADE SUMMARY:");
    console.table(result);
  } catch (error) {
    console.error("Error:", error.message);
  } finally {
    await client.close();
  }
}

main();