// const chai = require("chai");
// const expect = chai.expect;

// const sinon = require("sinon");
// const rewire = require("rewire");
// const mongoose = require("mongoose")
// const sandbox = sinon.createSandbox()

// let bookController = rewire("../controller/book.controller")


// describe("TEST api/books", () => {
//     let sampleBookVal;
//     let findStub;
//     let findOneStub;
//     let undateStub;

//     beforeEach(() => {
//         sampleBookVal = {
//             title: "Sample book",
//             author: "sample author",
//             genre: "sample genre",
//             description: "sample description",
//             publishedDate: "10/11/2001"
//         }
//     })

//     afterEach(() => {
//         bookController = rewire("../controller/book.controller")
//         sandbox.restore();
//     })

//     describe("GET/", () => {
//         it("should fetch all products", async () => {
//             bookController.getAllBooks()
//                 .then((books) => {
//                     expect(books).to.equal([sampleBookVal])
//                 })
//                 .catch((err) => {
//                     throw new Error("unexpected failure")
//                 })
//         })

//         // it("should fetch all products", async () => {
//         //     try{
//         //         const book = await bookController.getAllBooks()
//         //         expect(products).to.equal([sampleBookVal])

//         //     }catch(err){
//         //         throw new Error("unexpected failure")
//         //     }
//         // })
//     })

//     describe("POST/ ", () => {
//         let bookModelStub, saveStub, result;

//         beforeEach(async () => {
//             saveStub = sandbox.stub().returns(sampleBookVal)
//             bookModelStub = sandbox.stub().returns({
//                 save: saveStub
//             });

//             bookController.__set__('Book', bookModelStub);
//         })


//         it('should add a new book in DB successfully', async () => {
//             const req = mockRequest({
//                 body: {
//                     title: "Sample book",
//                     author: "sample author",
//                     genre: "sample genre",
//                     description: "sample description",
//                     publishedDate: "10/11/2001"
//                 }
//             })
//             const res = mockResponse({
//                 status: jest.fn().mockReturnValue(res),
//                 json: jest.fn().mockReturnValue(res),
//                 send: jest.fn().mockReturnValue(res),
//                 redirect: jest.fn()
//             });

//             result = await bookController.addBooks(req, res);
//             expect(bookModelStub).to.have.been.calledWithNew;
//             expect(bookModelStub).to.have.been.calledWith(sampleBookVal);
//             expect(saveStub).to.have.been.called;
//             expect(result).to.equal(sampleBookVal);
//         });

//     });
// });

