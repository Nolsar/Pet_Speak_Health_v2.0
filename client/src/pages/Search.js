// import React, { useState, useEffect } from "react";
// import Jumbotron from "../components/Jumbotron";
// import DeleteBtn from "../components/DeleteBtn";
// import { Col, Row, Container } from "../components/Grid";
// import { List, ListItem } from "../components/List";
// import { Input, TextArea, FormBtn } from "../components/Form";
// import Client from "../../../models/client";

// function Clients() {
//   // Initialize books as an empty array
//     const [clients, setClients] = useState([]);
  
//     useEffect(() => {
//       loadClients();
//     }, []);

//     function loadClients() {
//       // Add code here to get all books from the database and store them using setBooks
//     }

//     return (
//       <Container fluid>
//         <Row>
//           <Col size="md-6">
//             <Jumbotron>
//               <h1>Search by client's last name</h1>
//             </Jumbotron>
//             <form>
//               <Input name="first_name" placeholder="first name" />
//               <Input name="last_name" placeholder="last name" />
//               {/* <TextArea name="synopsis" placeholder="Synopsis (Optional)" /> */}
//               <FormBtn>search</FormBtn>
//             </form>
//           </Col>
//           <Col size="md-6 sm-12">
//             <Jumbotron>
//               <h1>Client Information</h1>
//             </Jumbotron>
//             {Client.length ? (
//               <List>
//                 {Client.map(client => (
//                   <ListItem key={client.last_name}>
//                     <a href={"/client/" + book.last_name}>
//                       <strong>
//                         {book.title} by {book.author}
//                       </strong>
//                     </a>
//                     <DeleteBtn />
//                   </ListItem>
//                 ))}
//               </List>
//             ) : (
//               <h3>No Results to Display</h3>
//             )}
//           </Col>
//         </Row>
//       </Container>
//     );
//   }

// export default Books;