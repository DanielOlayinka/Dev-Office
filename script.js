const members = [
  {
    name: "Daniel Olayinka",
    role: "Frontend",
    image: "https://i.pravatar.cc/100?img=1"
  },
  {
    name: "Sarah Johnson",
    role: "Backend",
    image: "https://i.pravatar.cc/100?img=2"
  },
  {
    name: "Michael Lee",
    role: "Frontend",
    image: "https://i.pravatar.cc/100?img=3"
  },
  {
    name: "David Kim",
    role: "Backend",
    image: "https://i.pravatar.cc/100?img=4"
  },
  {
    name: "Emma Davis",
    role: "Frontend",
    image: "https://i.pravatar.cc/100?img=5"
  }
];

const container = document.getElementById("teamContainer");

function renderMembers(list){
  container.innerHTML = "";

  list.forEach(member => {
    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
      <img src="${member.image}" alt="${member.name}">
      <h3>${member.name}</h3>
      <p>${member.role} Developer</p>
    `;

    container.appendChild(card);
  });
}

function filterMembers(role){

  if(role === "all"){
    renderMembers(members);
    return;
  }

  const filtered = members.filter(member => member.role === role);
  renderMembers(filtered);
}

renderMembers(members);