const express = require("express");
const cors = require("cors");
const bodyparser = require("body-parser");

const app = express();

app.use(express.static("public"));

app.use(bodyparser.urlencoded({extended: false}))

app.use(bodyparser.json({extended: false}))

app.use(cors({origin: true, credentials: true}))

const stripe = require("stripe")("sk_test_51OHaapDAf4wD4vyZsJEuqoFciS5HcRO9MhFc85s8teszzEpjfzlsI1us2oPiu6zywoBAgELvbCeEOGgkTtzwPLPV000jNCFQ1S");

app.post("/checkout", async(req, res, next) => {
    try {

        const session = await stripe.checkout.sessions.create({
             line_items: req.body.items.map( (i) => ({
                 price_data:{
                    currency: 'brl',
                    unit_amount: i.price*100,
                    product_data: {
                        name: i.name,
                        images: [i.product]
                      },
                 },
                 quantity: i.qtd         
             }) ),
            mode: "payment",
            success_url:"http://localhost:4242/success.html",
            cancel_url:"http://localhost:4242/cancel.html",
        });
        res.status(200).json(session);
    } catch (error) {
        next(error);    
    }
});

app.listen(4242, () => console.log('app rodando na porta 4242'))