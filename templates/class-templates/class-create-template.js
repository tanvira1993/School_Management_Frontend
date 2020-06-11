const ClassCreateTemplate = `
<div>

<section class="content-header">
	    	<h1>
	            Classes
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryIssueBook/list"> all classes <router-link></li>
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
                                <input  class="form-control" placeholder="Please enter class name" v-model="newClass.name">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="newClass.branches_id">
                                    <option :value="null" disabled selected>Select Category</option>
                                    <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="required-field">Department &nbsp</label>
                                <select class="form-control" v-model="newClass.departments_id">
                                    <option :value="null" disabled selected>Select Department</option>
                                    <option v-for="department in departments" v-bind:value="department.id">{{ department.name }}</option>
                                </select>
                            </div>
                            
                        </div>
                        <div class="box-footer">
                            <button type="button" class="btn btn-primary btn-sm" style="background-color: #605ca8 !important" @click="submit()">Submit</button>
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


export default ClassCreateTemplate