const GradesCreateTemplate = `
<div>

    <section class="content-header">
	    	<h1>
	            Grades
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryIssueBook/list"> Grades list <router-link></li>
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
                                <input  class="form-control" placeholder="Please enter name" v-model="newGrade.name">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Grade Type &nbsp</label>
                                <input  class="form-control" placeholder="Please enter type" v-model="newGrade.grade_type">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="newGrade.branches_id">
                                    <option disabled>Select Branch</option>
                                    <option v-for="branch in branches" :value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="required-field">Class &nbsp</label>
                                <select class="form-control" v-model="newGrade.classes_id">
                                    <option disabled>Select Class</option>
                                    <option v-for="cls in classes" :value="cls.id">{{ cls.name }}</option>
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

export default GradesCreateTemplate