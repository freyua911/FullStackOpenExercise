const express = require('express')
const app = express()


let notes = [
  {
    id: 1,
    name: "Arto Hellas",
    number:"39-44-5323523"
  },
  {
    id: 2,
    name: "Ada Lovelace",
    number:"39-44-5323523"
  },
  {
    id: 3,
    name: "Dan Abramov",
    number:"12-43-234345"
  },
  {id: 4,
    name: "Marypoppendick",
    number:"39-44-5323523"
}
]

app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
  })
// 3.1
app.get('/api/persons', (request, response) => {
    response.json(notes)
})
  
// 3.2
app.get('/api/info', (request, response) => {
    const requestTime = new Date();
    const numberOfPhonebookData = notes.length;
  
    response.send(`
      <div>
        <p>phonebook has info for ${numberOfPhonebookData} people </p>
        <p> ${requestTime}</p>
      </div>
    `)
  })

// 3.3
  app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const note = notes.find(note => note.id === id)
    
  
    if (note) {
      response.json(note)
    } else {
      response.status(404).end()
    }
  })

//   3.4
  app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    notes = notes.filter(note => note.id !== id)
  
    response.status(204).end()
  })

//   3.7-3.8
var morgan = require('morgan')

morgan.token('postData', (req) => {
    return JSON.stringify(req.body);
  });
  
  app.use(morgan(':method :url :status :res[content-length] - :response-time ms :postData'));
   

//   3.5-3.6
const generateId = () => {
    const maxId = notes.length > 0
      ? Math.max(...notes.map(n => n.id))
      : 0;
    return maxId + 1;
  }
  
  const generateNum = () => {
    const part1 = Math.floor(Math.random() * 100);
    const part2 = Math.floor(Math.random() * 100);
    const part3 = Math.floor(Math.random() * 10000000);
  
    const generatedNum = `${part1}-${part2}-${part3}`;
    return generatedNum;
  }
  
  app.use(express.json());
  
  app.post('/api/persons', (request, response) => {
    const body = request.body;
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      });
    }
  
    const nameExists = notes.some(note => note.name === body.name);
  
    if (nameExists) {
      return response.status(400).json({ 
        error: 'the name to be added is already in the list' 
      });
    }
  
    const note = {
      name: body.name,
      number: body.number, // Assuming number is provided in the request body
      id: generateId(),
    };
  
    notes = notes.concat(note);
  
    response.json(note);
  });



const PORT = 3001
app.listen(PORT)
console.log(`Server running on port ${PORT}`)

