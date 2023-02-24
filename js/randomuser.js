const loadUser = () => {
  fetch("https://randomuser.me/api/?gender=female")
    .then((res) => res.json())
    .then((data) => displayUser(data));
};

const displayUser = (user) => {
  console.log(user);
  const nameTag = document.getElementById("name");
  nameTag.innerHTML = `${user.results[0].name.title} ${user.results[0].name.first} ${user.results[0].name.last}`;

  const genderTag = document.getElementById("gender");
  genderTag.innerHTML = user.results[0].gender;

  const locationTag = document.getElementById("location");
  locationTag.innerHTML = `${user.results[0].location.state}, ${user.results[0].location.country}`;

  const imgTag = document.getElementById("profile-pic");
  // user.results[0].picture.large
  imgTag.src = user.results[0].picture.large;
  imgTag.style.display = "block";
};

loadUser();
