/*global beforeEach, describe, it, assert, expect  */
'use strict';

describe('Board Model', function () {

  beforeEach(function () {
    this.boardModel = new ShakeTheSnake.Models.Board();
  });


  describe("initialization", function(){
    it("should have rows", function(){
      console.log(this, this.boardModel);
      chai.expect(this.boardModel.get("rows")).to.be.greaterThan(0);
    });

    it("should have columns", function(){
      chai.expect(this.boardModel.get("cols")).to.be.greaterThan(0);
    });
  });

  describe("move", function(){
    describe("for moving down", function(){
      it("should return the same value of column", function(){
        chai.expect(this.boardModel.move([5,5], "down")[0]).to.be.eql(5);
      });

      it("should return the next value of row", function(){
        chai.expect(this.boardModel.move([5,5], "down")[1]).to.be.eql(6);
      });
    });

    describe("for moving up", function(){
      it("should return the same value of column", function(){
        chai.expect(this.boardModel.move([5,5], "up")[0]).to.be.eql(5);
      });

      it("should return the previous value of row", function(){
        chai.expect(this.boardModel.move([5,5], "up")[1]).to.be.eql(4);
      });
    });

    describe("for moving left", function(){
      it("should return the same value of row", function(){
        chai.expect(this.boardModel.move([5,5], "left")[1]).to.be.eql(5);
      });

      it("should return the previous value of column", function(){
        chai.expect(this.boardModel.move([5,5], "left")[0]).to.be.eql(4);
      });
    });

    describe("for moving right", function(){
      it("should return the same value of row", function(){
        chai.expect(this.boardModel.move([5,5], "right")[0]).to.be.eql(5);
      });

      it("should return the next value of column", function(){
        chai.expect(this.boardModel.move([5,5], "right")[1]).to.be.eql(6);
      });
    });
  });

  describe(".addSnake", function(){
    it("should start listening to its moved event", function(){
      var board = new ShakeTheSnake.Models.Board();
      var snake = new ShakeTheSnake.Models.Snake({
        timer: new Backbone.Model(),
        board: board
      });
      var spy = sinon.spy(board, "validateMovement");
      snake.trigger("change:coords");
      chai.expect(spy).to.be.called;
    });
  });


});
