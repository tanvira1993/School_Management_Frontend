const LibraryIssueBookCreateTemplate = `
<div>

	<section class="content-header">
	    	<h1>
	            Issue A Book
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryIssueBook/list"> Issued Book's List <router-link></li>
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
                                <select class="form-control" v-model="fromInput.branches_id" @change="findIssueDependencies(); helpBox = false">
                                    <option :value="null" disabled selected>Select Branch</option>
                                    <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="required-field">Category &nbsp</label>
                                <select :disabled="categories.length == 0" class="form-control" v-model="fromInput.library_book_categories_id" @change="availableBooksByCategory()">
                                    <option :value="null" disabled selected>Select Category</option>
                                    <option v-for="category in categories" v-bind:value="category.id">{{ category.name }}</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label class="required-field">Book &nbsp</label>
                                <select :disabled="books.length == 0" class="form-control" v-model="fromInput.library_books_id" @change="availableBooks();helpBox=true">
                                    <option :value="null" disabled selected>Select Book</option>
                                    <option v-for="book in books" v-bind:value="book.id">{{ book.name }}</option>
                                </select>
                            </div>
                            <div class="form-group" v-if="helpBox" style="text-align: center">
                        		<span class="label" style="background-color: #605ca8" v-bind:class="{ 'danger-span': dngr }">Available Books:&nbsp {{avlBooks}} </span>
                        	</div>
                          
                            <div class="form-group">
                                <label class="required-field">Quantity &nbsp</label>
                                <select class="form-control" v-model="fromInput.quantity">
                                    <option :value="null" disabled selected>Quantity</option>
                                    <option v-for='index in avlBooks' v-bind:value="index">{{ index }}</option>
                                </select>
                            </div>
                            <!--<div class="form-group">
                                <label class="required-field">Issued to &nbsp</label>
                                <select :disabled="users.length == 0" class="form-control select2" style="width: 100%;" v-model="fromInput.users_id">
                                    <option :value="null" disabled selected>Select User</option>
                                    <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
                                </select>
                            </div>-->
                            <div class="form-group">
                                <label class="required-field">Issued to &nbsp</label>
                                <select :disabled="users.length == 0" class="form-control" v-model="fromInput.users_id">
                                    <option :value="null" disabled selected>Select User</option>
                                    <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button type="button" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="createIssueBook()">Submit</button>
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


export default LibraryIssueBookCreateTemplate