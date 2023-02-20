function giveSubject(stream) {
    let scienceCourses = 'physics, chemistry, Technical-drawing, Biology, English, Mathematics';
    let artCourses = 'Government, Economics, History Literature, English, Mathematics';
    let socialscience_Courses = 'Accounting, Commerce, Marketing, Geography Englis, Mahematics';
    let generalCourses = 'English, Mathematics'

    if (stream == 'Arts') {
        return(artCourses);
    }
    else if
        (stream == 'Science') {
        return(scienceCourses);
    }
    else if
        (stream == 'Socialscience') {
        return(socialscience_Courses)
    }
    else { return(generalCourses) };
}

let myCourses = giveSubject('Science');
console.log(myCourses);