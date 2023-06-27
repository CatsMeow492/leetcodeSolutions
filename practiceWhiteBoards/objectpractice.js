let student = {
    name: 'John Doe',
    age: 20,
    grades: {
        math: 'A',
        english: 'B',
        science: 'A'
    },
    isGraduated: false
};

for (let subject in student.grades) {
    console.log(subject);
}
