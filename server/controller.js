let cakesDB = [];
module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },
    getFortune: (req, res) => {
        const fortunes = ["A friend asks only for your time not your money.",
            "A friend is a present you give yourself.",
            "A gambler not only will lose what he has, but also will lose what he doesn’t have.",
            "A golden egg of opportunity falls into your lap this month.",
            "A good friendship is often more important than a passionate romance."];
      
        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];
      
        res.status(200).send(randomFortune);
    },
    getCake: (req, res) => {
        const cakes = ["Go get choclate cake", "Go get cheescake", "Go get strawberry cake"];
      
        
        let randomIndex = Math.floor(Math.random() * cakes.length);
        let randomcakes = cakes[randomIndex];

        cakesDB.push(randomcakes)

        res.status(200).send(cakesDB);
    }, 

    deleteCake: (req, res) =>{
        console.log(req.params.id)
        const {id} = req.params;
        cakesDB.splice(id,1);
        res.status(200).send(cakesDB)
    },
   addCake: (req, res) =>{
    const {value} = req.body
    cakesDB.push(value)
    res.status(200).send(cakesDB)
   },
//    updateCake: (req, res) => {
//     const {id} = req.body
//     cakesDB.put()
//     res.status(200).send(cakesDB)
//    }
 
}