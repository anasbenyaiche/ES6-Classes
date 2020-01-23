class Human {
    name;
    job;
    skills=[];
    constructor(){
        this.name="";
        this.job="";
        this.skills=[]
    }
    getJob(job){
        this.job=job;
        console.log(this.job)
    }
    leaveJob(){
        this.job="";
        console.log(this.job)
    }
    learnNewSkill(skill){
        this.skills.push(skill)
        console.log(this.skills)
    }
    forgetSkill(skill){
        let index = this.skills.indexOf(skill);
        this.skills.splice(index)
        console.log(skills)
    }


}

export Human;