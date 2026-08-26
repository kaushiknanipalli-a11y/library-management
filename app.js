// ========================================
// ANGULARJS APPLICATION
// ========================================

var app = angular.module("libraryApp", []);


// ========================================
// CONTROLLER
// ========================================

app.controller("LibraryController", function($scope) {


    // ========================================
    // FORM DATA
    // ========================================

    $scope.book = {};

    $scope.editing = false;

    $scope.editingBook = null;



    // ========================================
    // BOOK LIST
    // ========================================

    $scope.books = [

        {
            id: "B001",
            name: "Python Programming",
            author: "John Smith",
            category: "Programming",
            price: 500
        },

        {
            id: "B002",
            name: "Database System Concepts",
            author: "Abraham Silberschatz",
            category: "Database",
            price: 650
        },

        {
            id: "B003",
            name: "Computer Networks",
            author: "Andrew Tanenbaum",
            category: "Networking",
            price: 550
        },

        {
            id: "B004",
            name: "Let Us C",
            author: "Yashwant Kanetkar",
            category: "Programming",
            price: 300
        }

    ];



    // ========================================
    // ADD / UPDATE BOOK
    // ========================================

    $scope.saveBook = function() {


        // If editing an existing book

        if ($scope.editing) {


            $scope.editingBook.id =
                $scope.book.id;


            $scope.editingBook.name =
                $scope.book.name;


            $scope.editingBook.author =
                $scope.book.author;


            $scope.editingBook.category =
                $scope.book.category;


            $scope.editingBook.price =
                $scope.book.price;


            alert("Book updated successfully!");

        }


        // If adding a new book

        else {


            var newBook = {

                id: $scope.book.id,

                name: $scope.book.name,

                author: $scope.book.author,

                category: $scope.book.category,

                price: $scope.book.price

            };


            $scope.books.push(newBook);


            alert("Book added successfully!");

        }


        // Clear form

        $scope.resetForm();

    };



    // ========================================
    // EDIT BOOK
    // ========================================

    $scope.editBook = function(item) {


        // Enable edit mode

        $scope.editing = true;


        // Remember selected book

        $scope.editingBook = item;


        // Put selected book data into form

        $scope.book = {

            id: item.id,

            name: item.name,

            author: item.author,

            category: item.category,

            price: item.price

        };

    };



    // ========================================
    // DELETE BOOK
    // ========================================

    $scope.deleteBook = function(item) {


        var result =
            confirm("Are you sure you want to delete this book?");


        if (result) {


            var index =
                $scope.books.indexOf(item);


            if (index !== -1) {

                $scope.books.splice(index, 1);

            }


            // If deleted book was being edited

            if ($scope.editingBook === item) {

                $scope.resetForm();

            }


            alert("Book deleted successfully!");

        }

    };



    // ========================================
    // RESET / CANCEL
    // ========================================

    $scope.resetForm = function() {


        $scope.book = {};

        $scope.editing = false;

        $scope.editingBook = null;

    };


});