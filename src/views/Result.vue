<template>
    <div class="container-fluid">
        <div class="row home">

            <div class="col-lg-3 col-md-12 col-sm-12 py-5 bg-grey">
                <div class="text-center ml-auto mr-auto py-5">
                    <div class="leftside"></div>
                    <h5 class="text-dark text-uppercase">entrepreneurship</h5>
                    <a href="#" target="_blank" class="btn btn-info" @click.prevent="restartQuiz">&larr; Restart Quiz</a>
                </div>
            </div>

            <div class="col-lg-9 col-md-12 col-sm-12 bg-dark-grey">
                <d-row class="py-5">
                    <d-col>
                        <h3 class="">You are a</h3>
                        <h1 class="text-info text-uppercase border-bottom pb-3 border-info">
                            {{person.person}}
                        </h1>
                    </d-col>
                </d-row>

                <d-row>
                    <d-col sm="12" md="4" lg="4" class="py-2" v-for="(attribute, index) in person.attributes" :key="index">
                        <d-card class="shadow-none text-center">
                            <d-card-header class="bg-info text-white text-uppercase">
                                {{attribute[0]}}
                            </d-card-header>
                            <d-card-footer class="bg-dark text-white text-uppercase">
                                {{attribute[1]}}
                            </d-card-footer>
                        </d-card>
                    </d-col>
                </d-row>

                <d-row class="py-5">
                    <d-col>
                        <h3 class="text-success">Strengths</h3>
                        <ul>
                            <li v-for="(strength, index) in person.strengths" :key="index">{{strength}}</li>
                        </ul>
                        <p>{{person.strengthDescription}}</p>
                    </d-col>
                    <d-col>
                        <h3 class="text-danger">Weaknesses</h3>
                        <ul>
                            <li v-for="(weakness, index) in person.weaknesses" :key="index">{{weakness}}</li>
                        </ul>
                        <p>{{person.weaknessDescription}}</p>
                    </d-col>
                </d-row>

                <d-row class="py-5">
                    <d-col>
                        <h1 class="text-info text-uppercase border-bottom border-info pb-3">FAMOUS {{person.person}}</h1>
                        <div class="d-flex pt-3">
                        <div class="avatar mr-3">
                            <img :src="require('@/assets/img/'+person.makerImage)" alt="User avatar" />
                        </div>
                        <div>
                            <p class="text-uppercase text-muted col-md-8">{{person.maker}}, <span>{{person.makerFounded}}</span></p>
                            <p class="m-0 my-1 mb-2 text-muted col-md-8">{{person.makerAchievement}}</p>
                        </div>
                        </div>
                    </d-col>
                </d-row>

            </div>

        </div>
    </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
    data() {
        return {
          style:{
            maker:{
              person: 'maker',
              xter: "Makers bring ideas to life through tangible plans. A maker sees the big picture and the smallest details, simplifies complex problems -- their strength lies in execution. Simply put, they're great at getting things done. Makers prefer processes and systems over people, and apply their organizational skills across fields.",
              attributes: [
                  ["core desire", "solve problems"],
                  ["core fear", "losing control"],
                  ["core priority", "process"],
              ],
              strengths: ["Very disciplined and organized", "Goal-oriented", "Master Planner"],
              strengthDescription: "You are very good at planning and operational work; coming up with structures, processes, and systems to get things done as efficiently as possible.",
              weaknesses:["Does not like to give up control", "Can be dominating or aggressive","Low emotional quotient"],
              weaknessDescription:"You are naturally focused on process and tasks - you will need to connect with people and be open to new ideas to be an effective leader and entrepreneur.",
              maker:"Henry Ford",
              makerFounded:"Founder of Ford",
              makerImage:"henry_ford.jpg",
              makerAchievement:"Henry Ford revolutionized production and manufacturing, thereby making automobiles (which were then a luxury) accessible to masses."
            },
            merchant:{
              person: 'merchant',
              xter: "Merchants are often on the lookout for the next big thing - they quickly spot a market opportunity, an unmet need, and identify how to match demand with supply. They often tweak or improvise on existing ideas, and innovatively apply concepts from other industries.",
              attributes: [
                  ["core desire", "CAPTIALIZE ON OPPORTUNITIES"],
                  ["core fear", "losing money"],
                  ["core priority", "profit"],
              ],
              strengths: ["Decisive", "Persuasive", "Improvisor"],
              strengthDescription: "You are very good at spotting opportunities. Rational, resourceful, and tactful, you decide and act quickly, and persuade others to come on board.",
              weaknesses:["Focused on short-term goals", "Prone to taking shortcuts","Impatient"],
              weaknessDescription:"While you have high business acumen, and quickly find profitable solutions, you will need to focus on ethical practices, and the big picture - not just short-term profits.",
              maker:"RICHARD BRANSON",
              makerFounded:"FOUNDER OF VIRGIN GROUP",
              makerImage:"richard_branson.jpg",
              makerAchievement:"Richard Branson is one of the most celebrated entrepreneurs, who has made a mark in everything from music to space tourism."
            },
            magician:{
              person: 'magician',
              xter: "Often challenging the status quo, the Magician dreams of what can be. He or she takes risks that aren't always calculated, navigates unchartered territory, and stays ahead of the market. Magicians are the ones creating the future, surprising their customers and competitors. These are the visionaries and rule-breakers who ask - \"why not?\"",
              attributes: [
                  ["core desire", "to innovate"],
                  ["core fear", "running out of creative ideas"],
                  ["core priority", "ideas"],
              ],
              strengths: ["Thinks wildly and imaginatively", "Has an innovation mindset", "Not afraid to challenge status quo"],
              strengthDescription: "You are very good at thinking big and coming up with gamechanging ideas. You tend to go by your gut and take risks for things that you believe in strongly.",
              weaknesses:["Impractical at times", "High emotional investment in ideas/ defensive"],
              weaknessDescription:"While you are great at ideation, you should focus on execution as well, so that your dreams come with a plan. Remember that ideas without action create little impact.",
              maker:"STEVE JOBS, ",
              makerFounded:"Founder of Apple and Pixar",
              makerImage:"steve_jobs.jpg",
              makerAchievement:"Steve Jobs was a visionary and radical entrepreneur, best known for his perfection and great design. He revolutionised personal computers, animated movies, music, phones, tablets, and digital publishing."
            },
            mobilizer:{
              person: 'mobilizer',
              xter: "Mobilizers are the connecting thread - they connect ideas, people, and resources and are great at building relationships and high-energy teams. They are often involved at the grassroots level, and tend to focus on large-scale social problems and act as catalysts to bring about systemic change.",
              attributes: [
                  ["core desire", "to help others"],
                  ["core fear", "conflict"],
                  ["core priority", "people"],
              ],
              strengths:["Connects ideas and people","Empathetic and compassionate","Catalyst for social change"],
              strengthDescription: "You are very good at relating to others and bringing the right people together to work as a team. You care deeply about social problems and want to make an impact.",
              weaknesses:["Dependency on people is high", "May lack depth or expertise"],
              weaknessDescription:"While you are great at connecting people to create systemic change, you should also focus on building your expertise in an area, and reduce dependency on others.",
              maker:"Muhammad Yunus",
              makerFounded:"Founder of Grameen Bank",
              makerImage:"muhammad_yunus.jpg",
              makerAchievement:"Muhammad Yunus is a Bangladeshi social entrepreneur, banker, economist, and civil society leader who founded the Grameen Bank and pioneered the concepts of microfinance and microcredit."
            },
            master:{
              person: 'master',
              xter: "Experts in their own right, Masters are highly skilled and knowledgeable individuals with great passion for their chosen field. They adhere to high quality standards and expect the same of others. An expert is often looked up to as a role model, thought leader, or influencer in their industry.",
              attributes: [
                  ["core desire", "to be an expert"],
                  ["core fear", "being average"],
                  ["core priority", "knowledge"],
              ],
              strengths: ["Highly skilled and knowledgeable", "Confident", "Has high standards for excellence"],
              strengthDescription: "You are very good at seeking out knowledge and mastering things better than others - your experience makes you highly valuable. You are a perfectionist.",
              weaknesses:["Can be inflexible", "Can become myopic"],
              weaknessDescription:"While you are great at building on your domain expertise, you face the risk of losing sight of the larger picture. Be open to others' opinions and what's beyond your area of expertise.",
              maker:"Bill Gates",
              makerFounded:"Founder of MICROSOFT& GATES FOUNDATION",
              makerImage:"bill_gates.jpg",
              makerAchievement:"Bill Gates, undoubtedly an expert at computer programming,revolutionized the software industry by introducing the Windows OS. He is also a great leader and a highly influential philanthropist."
            }
          }
        }
    },
    computed: {
      ...mapState('quiz', ["entrepreneurStyle"]),
      person(){
        return this.style[this.entrepreneurStyle]
      }
    },
    methods: {
        restartQuiz(){
            this.gaClickCta('restartQuiz')
            this.$store.dispatch('quiz/clearChosen')
            this.$router.replace({name:'Home'})
        }
    },
}
</script>
<style scoped>
.avatar img {
    width: 7rem;
    border-radius: .25rem;
}
</style>