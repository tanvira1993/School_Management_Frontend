const SyllabusCreateTemplate = `
<div>

<section class="content-header">
	    	<h1>
	            Syllabuses
	        </h1>
	        <ol class="breadcrumb">
	            <li><router-link to="/"><i class="fa fa-dashboard"></i> Dashboard<router-link></li>
	            <li class="active"><router-link to="/organization/libraryBookLocation/list"> Syllabus List <router-link></li>
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
                                <input type="text" class="form-control" placeholder="Please enter name" v-model="newSyllabus.name">
                            </div>

                            <div class="form-group">
                                <label class="required-field">File &nbsp</label>
                                <input type="file" @change="fileChange" class="form-control">
                            </div>

                            <div class="form-group">
                                <label class="required-field">Branch &nbsp</label>
                                <select class="form-control" v-model="newSyllabus.branches_id">
                                    <option :value="null" disabled selected>Select Branch</option>
                                    <option v-for="branch in branches" v-bind:value="branch.id">{{ branch.name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="required-field">Class &nbsp</label>
                                <select class="form-control" v-model="newSyllabus.classes_id">
                                    <option :value="null" disabled selected>Select Class</option>
                                    <option v-for="cls in classes" v-bind:value="cls.id">{{ cls.name }}</option>
                                </select>
                            </div>

                            <div class="form-group">
                                <label class="required-field">subject &nbsp</label>
                                <input type="number" class="form-control" placeholder="Please enter subject" v-model="newSyllabus.subjects_id">
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

export default SyllabusCreateTemplate