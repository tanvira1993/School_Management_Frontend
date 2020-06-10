const LibraryBookshelvesCreateTemplate = `
<div>

	<section class="content-header">
	    	<h1>
	            Add Bookshelves
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryBookshelves/list"> Bookshelves's List <router-link></li>
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
                                <label class="required-field">Name &nbsp</label>
                                <input  class="form-control" placeholder="Please enter bookshelves's name" v-model="fromInput.name">
                            </div>
                            <div class="form-group">
                                <label class="required-field">Rows &nbsp</label>
                                <input  type="number" class="form-control" placeholder="Please enter bookshelves's no of rows" v-model="fromInput.quantity" @change="quantityValue">
                            </div>
                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="fromInput.branches_id">
                                    <option :value="null" disabled selected>Select Branch</option>
                                    <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>
                        </div>
                        <div class="box-footer">
                            <button type="button" v-bind:class="{ 'disabled': disbutton,}" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="createBookshelves()">Submit</button>
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


export default LibraryBookshelvesCreateTemplate