let myprojects = []
function addMyProject(event) {
    event.preventDefault()

    let projectName = document.getElementById('project-name').value
    let description = document.getElementById('description').value
    let image = document.getElementById('input-myproject')

    image = URL.createObjectURL(image.files[0])

    let tampung = {
        projectName: projectName,
        description,
        image,
        postedAt: new Date()
    }

    myprojects.push(tampung)

    renderMyproject()
}

function renderMyproject() {
    let lengthData = myprojects.length

    console.log(myprojects[0].image);

    let myprojectContainer = document.getElementById('contents')

    // blogContainer = "data-default, data1, data2"

    myprojectContainer.innerHTML = firstMyprojectContent()

    // blogContainer = "data-default"

    let i = 0
    for (i; i < lengthData; i++) {
        myprojectContainer.innerHTML += `
        <div class="myprojectlistitem">
                
                <!--Halaman dibwah project-->
                <div class="partbawah">
                    <div class="myproject-image">
                        <img src="${myprojects[i].image}" alt="bagianbawah1"/>
                    </div>
                    <div class="informasi">
                        <h3>
                        <a href="MyProjectDetails.html" target="_blank">${myprojects[i].projectName}</a>
                        </h3>
                        <p>durasi 3 bulan</p>
                        
                    </div>
                    <p>
                    <p>App that used for dumbways student,</p>
                    <p>it was deployed and can download on playstore.</p>
                    <p> happy download ${myprojects[i].description}</p> 
                    </p>
                    <div class="lambang">
                        <i class="fab fa-google-play"></i>
                        <i class="fab fa-android"></i>
                        <i class="fab fa-java"></i>

                    </div>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </div>
            </div>`
    }
    // blogContainer = "data-default, data1, data2, data3"
}

function firstMyprojectContent() {
    return `
    <div class="myprojectlistitem">
                
                <!--Halaman dibwah project-->
                <div class="partbawah">
             
                    <div class="myproject-image">
                        <img src="assets/file1.png" alt="bagianbawah1"/>
                    </div>
                    <div class="informasi">
                        <h3>
                        <a href="MyProjectDetails.html" target="_blank">Dumbways Mobile App</a>
                        </h3>
                        <p>durasi 3 bulan</p>
                        
                    </div>
                    <p>App that used for dumbways student,</p>
                    <p>it was deployed and can download on playstore.</p>
                    <p> happy download</p>
                    <div class="lambang">
                        <i class="fab fa-google-play"></i>
                        <i class="fab fa-android"></i>
                        <i class="fab fa-java"></i>
                    </div>
                    <div class="btn-group">
                        <button class="btn-edit">Edit</button>
                        <button class="btn-delete">Delete</button>
                    </div>
                </div>
            </div>`
}


