const LibraryBooksCreateTemplate = `
<div>

	<section class="content-header">
	    	<h1>
	            Add Book
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryBooks/list"> Book's List <router-link></li>
	        </ol>
	</section>

    <section class="content">
        <div class="row">
            <!-- left column -->
            <div class="col-md-6">
                <!-- general form elements -->
                <div class="box box-primary">
                    <div class="box-header">
                    </div>

                    <form>
                        <div class="box-body">
    					    <div class="form-group">
                                <label class="required-field">Title &nbsp</label>
                                <input  class="form-control" placeholder="Please enter book's name" v-model="fromInput.name">
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
                            <button type="button" class="btn btn-primary btn-sm" @click="createBook()">Submit</button>
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


export default LibraryBooksCreateTemplate