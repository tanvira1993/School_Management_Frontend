const LibraryBookLocationCreateTemplate = `
<div>

	<section class="content-header">
	    	<h1>
	            Add Book's Location
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryBookLocation/list"> Book Location's List <router-link></li>
	        </ol>
	</section>

    <section class="content">
        <div class="row">
            <!-- left column -->
            <div class="col-md-6">
                <!-- general form elements -->
                <div class="box box-primary" style="border-top-color: #605ca8 !important">
                    <div class="box-header">
                    </div>

                    <form>
                        <div class="box-body">
                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="fromInput.branches_id" @change="findLibraryDependencies()">
                                    <option :value="null" disabled selected>Select Branch</option>
                                    <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="required-field">Category &nbsp</label>
                                <select :disabled="categories.length == 0" class="form-control" v-model="fromInput.library_book_categories_id" @change="findUnlocatedBooksByCategory()">
                                    <option :value="null" disabled selected>Select Category</option>
                                    <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="required-field">Book &nbsp</label>
                                <select :disabled="books.length == 0" class="form-control" v-model="fromInput.library_books_id">
                                    <option :value="null" disabled selected>Select Book</option>
                                    <option v-for="book in books" v-bind:value="book.id">{{ book.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="required-field">Quantity &nbsp</label>
                                <input type="number" @change="quantityValue()" class="form-control" placeholder="Please enter quantity of book" v-model="fromInput.quantity">
                            </div>
                            <div class="form-group">
                                <label class="required-field">Reserved &nbsp</label>
                                <input type="number" class="form-control" @change="reservedBooks();reservedValue()" placeholder="Please enter quantity of book" v-model="fromInput.reserved">
                            </div>
                            <div class="form-group">
                                <label class="required-field">Bookshelves &nbsp</label>
                                <select :disabled="booksheleves.length == 0" class="form-control" v-model="fromInput.library_bookshelves_id" @change="findBookshelvesRow()">
                                    <option :value="null" disabled selected>Select Bookshelves</option>
                                    <option v-for="booksheleve in booksheleves" v-bind:value="booksheleve.id">{{ booksheleve.name }}</option>
                                </select>
                            </div>
                            <!--<div class="form-group">
                                <label class="required-field">Rows &nbsp</label>
                                <select class="form-control select2" v-model="fromInput.shelves_no" multiple="multiple">
                                    <option disabled selected>Select Rows no</option>
                                    <option v-for='index in bookshelevesRow' v-bind:value="index">{{ index }}</option>
                                </select>
                            </div>-->
                            <div class="form-group">
                                <label class="required-field">Start Row &nbsp</label>
                                <select class="form-control" v-model="fromInput.start_shelves_no">
                                    <option :value="null" disabled selected>Select Rows no</option>
                                    <option v-for='index in bookshelevesRow' v-bind:value="index">{{ index }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="required-field">End Row &nbsp</label>
                                <select class="form-control" v-model="fromInput.end_shelves_no" @change="shelvesValidationChk()">
                                    <option :value="null" disabled selected>Select Rows no</option>
                                    <option v-for='index in bookshelevesRow' v-bind:value="index">{{ index }}</option>
                                </select>
                            </div>
                
                        </div>
                        <div class="box-footer">
                            <button type="button" v-bind:class="{ 'disabled': disbutton,}" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="createBookLocation()">Submit</button>
                        </div>
                    </form>
                </div>
                <!-- /.box -->
            </div>
            <!--/.col (left) -->
        </div>
        <!-- /.row -->
    </section>

</div>
`


export default LibraryBookLocationCreateTemplate