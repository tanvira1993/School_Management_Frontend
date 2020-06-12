const ConventionalGradingCreateTemplate = `
<div>

    <section class="content-header">
	    	<h1>
	            Create COnventional Grade
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryIssueBook/list"> all conventional grades <router-link></li>
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
                                <label class="required-field">Pass marks &nbsp</label>
                                <input  class="form-control" placeholder="Please enter pass marks" v-model="newConventionalGrade.pass_mark">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="newConventionalGrade.branches_id">
                                    <option :value="null" disabled selected>Select Branch</option>
                                    <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="required-field">Grade &nbsp</label>
                                <select class="form-control" v-model="newConventionalGrade.grades_id">
                                    <option :value="null" disabled selected>Select Grade</option>
                                    <option v-for="grade in grades" v-bind:value="grade.id">{{ grade.name }}</option>
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

export default ConventionalGradingCreateTemplate