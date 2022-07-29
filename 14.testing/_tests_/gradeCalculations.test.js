const { averageExams, isStudentPassExam } = require('../gradeCalculations');

// grouping /multi testing
describe('grade calculation', () => {

    // test #1
    test('it should return exact average', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(averageExams(listValueOfExams)).toEqual(90);
    });

    // test #2
    test('it should return exam passed status', () => {
        const listValueOfExams = [80, 100, 100, 80];
        expect(isStudentPassExam(listValueOfExams, 'kid')).toEqual(true);
    });

    // test #3
    test('it should return exam failed status', () => {
        const listValueOfExams = [50, 40, 70, 80];
        expect(isStudentPassExam(listValueOfExams, 'kid')).toEqual(false);
    });
});