describe('API testing reqres.in method GET', ()=> {
    it('Should fetch all users successfully', () => {
        cy.request({ 

            url:'https://reqres.in/api/users?page=2',
            method:'GET',
            
        }).then((response) => {
            expect(response.status).to.eq(200); // Memastikan status code 200 OK
            // Memastikan respons body berisi data pengguna
                expect(response.body.data).to.have.length.greaterThan(0);

                // Tampilkan seluruh data dari response di Cypress log
                cy.log('Response Data:', JSON.stringify(response.body));

                // Tampilkan ke browser console
                console.log('Response Data:', response.body);

                // Memunculkan setiap data user di log Cypress (misalnya: id, first_name, last_name)
                response.body.data.forEach((user) => {
            cy.log(`User ID: ${user.id}, Email: ${user.email}, Name: ${user.first_name}, Last Name: ${user.last_name}, Avatar: ${user.avatar}`);
      });
    });
  });
});

describe('API testing reqres.in method POST', () => {
    it('Should create a new user', () => {
        cy.request({
            method: 'POST',
            url: 'https://reqres.in/api/users?page=2', // URL endpoint untuk membuat user baru
            body: {
            id: '13',
            email: 'David.jonathan@reqress.in',
            first_name : 'David',
            last_name : 'jonathan',
            avatar : 'https://reqres.in/img/faces/12-image.jpg'

        }
      }).then((response) => {
        // Memastikan status code 201 Created
        expect(response.status).to.eq(201);
  
        // Memastikan respons body berisi data yang baru dibuat
        expect(response.body).to.have.property('id', '13');
        expect(response.body).to.have.property('email', 'David.jonathan@reqress.in');
        expect(response.body).to.have.property('first_name', 'David');
        expect(response.body).to.have.property('last_name', 'jonathan');
        expect(response.body).to.have.property('avatar', 'https://reqres.in/img/faces/12-image.jpg');
  
        // Tampilkan hasil di Cypress log
        cy.log('New User Created:', JSON.stringify(response.body));
      });
    });
  });
  
describe('API testing reqres.in method PUT', () => {
    it('Should update an existing user', () => {
        cy.request({
            method: 'PUT',
            url: 'https://reqres.in/api/users/13', // URL endpoint untuk update user pada id 13
            body: {
                email: 'John.Brooks@reqress.in',
                first_name : 'John',
                last_name : 'Brooks',
        }
      }).then((response) => {
        // Memastikan status code 200 OK
        expect(response.status).to.eq(200);
  
        // Memastikan respons body berisi data yang diperbarui
        expect(response.body).to.have.property('email', 'John.Brooks@reqress.in');
        expect(response.body).to.have.property('first_name', 'John');
        expect(response.body).to.have.property('last_name', 'Brooks');
  
        // Tampilkan hasil di Cypress log
        cy.log('Updated User:', JSON.stringify(response.body));
      });
    });
  });
  
describe('API Testing with DELETE Method', () => {
    it.only('Should delete a user successfully', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://reqres.in/api/users/13', // URL endpoint untuk menghapus user dengan ID 2
      }).then((response) => {
        // Memastikan status code 204 No Content (berarti berhasil dihapus)
        expect(response.status).to.eq(204);
  
        // Tampilkan pesan di Cypress log
        cy.log('User deleted successfully');
      });
    });
  });
  



  