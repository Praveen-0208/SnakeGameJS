class scoringSystem{

    constructor(){
        this.level = 1;
        this.score = 0;
        this.maximumScore = 15;
        this.points = 3;
    }

    incrementScore() {
        this.score +=this.points;
        document.getElementById('score').textContent = 'Score:'+this.score;
        document.getElementById('level').textContent = 'Level:'+this.level;
        if(this.score % this.maximumScore === 0){
            this.level ++;
            document.getElementById('level').textContent = 'Level:'+this.level;
            return true;
        }
        return false;
    }
}

