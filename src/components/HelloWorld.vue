<template>
      <div>
        <div class="container-fluid">
          <div class="row home">

            <div class="col-lg-3 col-md-12 col-sm-12 py-5 bg-grey">
            <div class="text-center ml-auto mr-auto py-5">
              <div class="leftside"></div>
              <h5 class="text-dark text-uppercase">entrepreneurship</h5>
            </div>

            </div>

            <div class="col-lg-9 col-md-6 col-sm-12 py-5 bg-dark-grey">
              <h1 class="text-info border-bottom border-info pb-3">{{quiz}}</h1>
              <p>{{introduction}}</p>
              <p>{{time}}</p>
                    <d-btn v-if="currentQuiz>1" @click="prevQuiz" class="mr-3"> &larr; Prev</d-btn>
                    <d-btn @click="nextQuiz" v-if="currentQuiz<numberOfQuestions" >Next &rarr;</d-btn>
                    <d-btn v-if="currentQuiz===numberOfQuestions" theme="info" class="ml-3" @click="finishQuiz">Finish &check;</d-btn>
                    <hr>
                    <d-alert dismissible
                            :show="timeUntilDismissed"
                            theme="danger"
                            @alert-dismissed="timeUntilDismissed = 0"
                            @alert-dismiss-countdown="handleTimeChange">
                        <b>Looks like you missed something. Ensure you don't leave anything unchecked.</b>
                    </d-alert>
                <span class="font-weight-bold d-block my-3">{{currentQuiz}}. {{questions[currentQuiz].question}}</span>
                    <table class="table mb-0">
                      <thead class="bg-light">
                        <tr>
                          <th scope="col" class="border-0">#</th>
                          <th scope="col" class="border-0" v-for="(choice, index) in choices" :key="index">
                            {{choice}}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(checklist, checklistIndex) in questions[currentQuiz].checklists" :key="checklistIndex">
                          <td class="font-weight-bold blah">{{checklist}}</td>
                          <td v-for="(item, index) in 4" :key="index">
                              <input type="radio" :id="currentQuiz+'-'+index+'-'+letters[checklistIndex]"  @change="boxChecked($event)" :data-letter="letters[checklistIndex]" :value="index+1" v-model="chosen[currentQuiz][letters[checklistIndex]]">
                              <label :for="currentQuiz+'-'+index+'-'+letters[checklistIndex]"></label>
                          </td>
                        </tr>
                      </tbody>
                    </table>
            </div>

          </div>
        </div>
      </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      quiz:"Entrepreneur Style Quiz",
      introduction: "Imagine you are starting out on a journey. This journey is in the context of a work scenario or a project that you are taking up. Take the quiz with this in mind.There are five statements under each question. For each statement, circle the option that you feel is the closest to your personality and what you believe in.",
      time: "The quiz will take you 10 minutes.",
      choices: ["Not very true of me","Somewhat true of me","True of me","Very true of me"],
      letters: ['a', 'b', 'c', 'd', 'e'],
      currentQuiz: 1,
      questions: {
        1 : {
          question: "Your first step when you start a new project would be to:",
          checklists: [
            "Plan every detail and checklist.", "Look for a reference project to follow.", "Brainstorm to think of all possible out-of-the-box ideas.", "Bring the right people together.", "Quickly gather the knowledge and resources needed."
          ]
        },
        2 : {
          question: "Out of the following, what do you think is most important for your project to succeed?",
          checklists: [
            "Following the process.", "Spotting the right opportunity.", "Having the most unique idea.", "Having the right team/mix of people.", "Having the required expertise."
          ]
        },
        3 : {
          question: "In the context of a team project, my biggest strength is:",
          checklists: [
            "Planning and executing.", "Spotting opportunities and adapting ideas.", "Thinking wildly and imaginatively.", "Relating to people.", "Being able to master something better than others."
          ]
        },
        4 : {
          question: "If I had to make an important decision regarding the project, I would:",
          checklists: [
            "See whether it fits my plan of action.", "Compare the costs and benefits of all actions quickly.", "Go by my instinct and do what feels right.", "Bring my team together and include everyone’s opinion before taking a decision.", "Do thorough research and gather all necessary data and facts."
          ]
        },
        5 : {
          question: "What would be your biggest worry while the project is going on?",
          checklists: [
            "Things going out of control or becoming chaotic", "The project not making any money", "Running out of original ideas halfway through the project", "People in the team not being able to work together in sync", "Not having the knowledge to successfully finish the project"
          ]
        },
        6 : {
          question: "Imagine there is a crisis during your project. Your reaction would be to:",
          checklists: [
            "Use my Plan B (or the backup plan) that I had already created.", "Make the most of the situation and adapt quickly.", "Think of how to turn the challenge into an opportunity.", "Get the team together and brainstorm to find an appropriate solution.", "Face the challenge with the confidence that I can get through it."
          ]
        },
        7 : {
          question: "Imagine that you are asked to evaluate your project and your peers’ projects. What is a successful project according to you?",
          checklists: [
            "The project is executed effectively and on time.", "The project makes profit and financial sense.", "The project has the most innovative solution.", "The team members complement each other’s strengths.", "The end result is of the highest quality, with attention to detail."
          ]
        },
        8 : {
          question: "Imagine that you are considering to start a business. You would start something of your own because:",
          checklists: [
            "I see a much more efficient solution to the problem.", "I see an opportunity to build a profitable business quickly.", "I have an idea that will change the world.", "I want to solve society’s problems through my venture.", "I have the expertise and knowledge to deliver a good product/service."
          ]
        },
        9 : {
          question: "How close are each of the following entrepreneurs to your personality?",
          checklists: [
            "Henry Ford, the founder of Ford Motor Company, who built the first automobile that many middle-class Americans could afford.", "Richard Branson, the founder of Virgin Group, who is quick to spot market opportunities and unmet needs. The Virgin group comprises of more than 400 companies - from mobile phones to space travel.", "Steve Jobs, founder of Apple and Pixar. Steve Jobs dreamed of staying ahead of the market, believed in surprising and delighting customers, and navigating entirely on new territories all the time.", "Mohammad Yunus, founder of Grameen Bank, who pioneered microfinance and social entrepreneurship. He is a great catalyst, who brought systemic change and addressed large-scale social problems by gathering the right people.", "Kiran Mazumdar Shaw, Founder of Biocon: Established herself as an expert in biomedicine research and built a successful business out of it."
          ]
        },
        10 : {
          question: "This question is about your outlook toward life, in general. You believe that:",
          checklists: [
            "Life is a well-planned adventure.", "Life is about making the most of every moment.", "Life is about living my own dreams.", "Life is about helping other people.", "Life is about finding out what I am best at and doing it."
          ]
        }
      },
      blankFound: false,
      duration: 5,
      timeUntilDismissed: 0
    }
  },
  computed:{
    ...mapState('quiz', ["chosen"]),

    numberOfQuestions(){
      return Object.keys(this.questions).length
    }
  },
  created(){
    this.createArray()
    // this.$store.dispatch('quiz/clearChosen')
  },
  methods: {
    boxChecked(event){
      this.$store.dispatch('quiz/addToChosen', {
        quiz: this.currentQuiz,
        letter: event.target.dataset.letter,
        value: event.target.value
      })
    },
    finishQuiz(){
      if(Object.values(this.chosen[this.currentQuiz]).includes('')){
         this.timeUntilDismissed = this.duration
      }else{
        let totalA = 0, totalB = 0, totalC = 0, totalD = 0, totalE = 0
        for(let key in this.chosen){
          if(this.chosen[key]){
            for (let index = 0; index < this.letters.length; index++) {
              switch (this.letters[index]) {
                case 'a':
                  totalA = totalA + this.chosen[key][this.letters[index]]
                  break;
                case 'b':
                  totalB = totalB + this.chosen[key][this.letters[index]]
                  break;
                case 'c':
                  totalC = totalC + this.chosen[key][this.letters[index]]
                  break;
                case 'd':
                  totalD = totalD + this.chosen[key][this.letters[index]]
                  break;
                case 'e':
                  totalE = totalE + this.chosen[key][this.letters[index]]
                  break;

                default:
                  break;
              }
            }
          }
        }
        let arr = {maker: totalA, merchant:totalB, magician:totalC, mobilizer:totalD, master:totalE}
        let entrepreneurStyle = Object.keys(arr).reduce((a,b) => arr[a] > arr[b] ? a : b)
        this.$store.dispatch('quiz/setEntrepreneurStyle', entrepreneurStyle)
        this.$router.replace({name:'Result'})
      }
    },
    nextQuiz(){
      if(Object.values(this.chosen[this.currentQuiz]).includes('')){
         this.timeUntilDismissed = this.duration
      } else {
        if(this.questions[this.currentQuiz+1])  ++this.currentQuiz
      }
    },
    prevQuiz(){
      if(this.questions[this.currentQuiz-1]) --this.currentQuiz
    },
    handleTimeChange (time) {
      this.timeUntilDismissed = time
    },
    createArray(){
      let chosenObj = {}
      for (let index = 1; index <= 10; index++) {
        chosenObj[index] = {}
        for (let index1 = 0; index1 < this.letters.length; index1++) {
          chosenObj[index][this.letters[index1]] = ''
        }
      }
      if(Object.keys(this.chosen).length === 0) this.$store.dispatch('quiz/createChosen', chosenObj)
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*Checkboxes styles*/
input[type="radio"] { display: none; }

input[type="radio"] + label {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 20px;
  font: 14px/20px 'Open Sans', Arial, sans-serif;
  color: #ddd;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}

input[type="radio"] + label:last-child { margin-bottom: 0; }

input[type="radio"] + label:before {
  content: '';
  display: block;
  width: 20px;
  height: 20px;
  border: 1px solid #359ab0;
  position: absolute;
  left: 0;
  top: 0;
  opacity: .6;
  -webkit-transition: all .12s, border-color .08s;
  transition: all .12s, border-color .08s;
}

input[type="radio"]:checked + label:before {
  width: 10px;
  top: -5px;
  left: 5px;
  border-radius: 0;
  opacity: 1;
  border-top-color: transparent;
  border-left-color: transparent;
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
