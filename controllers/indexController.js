const data = require("../data");

exports.getList = (req, res) => {
    const contacts = data.map((d) => `${d.name} - ${d.phone}`);
    console.log('getList', contacts);
    res.render("all.handlebars", { contacts });
}

exports.getAdd = (req, res) => {
    const contacts = data.map((d) => `${d.name} - ${d.phone}`);
    console.log('getAdd',contacts);
    res.render("add.handlebars", { contacts, isContactsBlocked: true });
}

exports.getUpdate = (req, res) => {
    const name = req.query.name;
    const phone = req.query.phone;
    console.log('GetUpd', phone);
    const contacts = data.map((d) => `${d.name} - ${d.phone}`);
    console.log(phone);
    res.render("update.handlebars", {
      contacts,
      isContactsBlocked: true,
      name,
      phone,
    });
}

exports.addContact = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;
    console.log('AddContact', phone);
    data.push({ name, phone });

    const contacts = data.map((d) => `${d.name} - ${d.phone}`);

    res.json({ contacts });
}

exports.updateContact = (req, res) => {
    const name = req.body.name;
    const phone = req.body.phone;

    const index = data.findIndex((contact) => contact.phone === phone);

    if (index !== -1) data[index].name = name;

    const contacts = data.map((d) => `${d.name} - ${d.phone}`);

    res.json({ contacts });
}

exports.deleteContact = (req, res) => {
    const phone = req.body.phone;

    const index = data.findIndex((contact) => contact.phone === phone);

    if (index !== -1) data.splice(index, 1);

    const contacts = data.map((d) => `${d.name} - ${d.phone}`);

    res.json({ contacts });
}