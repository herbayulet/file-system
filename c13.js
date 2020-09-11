const fs = require('fs');
const proc = process.argv;
const args = process.argv[2];
const index = proc.slice(3, proc.length);
let daftar = JSON.parse(fs.readFileSync('task.JSON', 'utf8'));
const tags = index.slice(1, index.length);
const nom = index.slice(0, 1);
const args2 = process.argv.length > 2 && process.argv[2];

if (args2) {
    switch (args) {
        case 'add':
            daftar.push({ todo: index.join(" "), complete: false, tag: '' });

            console.log(`"${index.join(" ")}" telah ditambahkan.`);

            let tambah = JSON.stringify(daftar, null, 2);

            fs.writeFileSync('task.JSON', tambah);

            break;

        case 'list':

            console.log('Daftar Pekerjaan');

            for (let i = 0; i < daftar.length; i++) {

                console.log(`${i + 1}. ${daftar[i].complete ? '[x]' : '[ ]'} ${daftar[i].todo}.`);

            }

            break;

        case 'delete':

            console.log(`${daftar[index - 1].todo} telah dihapus dari daftar.`);

            daftar.splice(index - 1, 1)

            let kurang = JSON.stringify(daftar, null, 2);

            fs.writeFileSync('task.JSON', kurang);

            break;

        case 'complete':

            console.log(`\[x\] ${daftar[index - 1].todo} telah selesai`);

            daftar[index - 1].complete = true;

            let done = JSON.stringify(daftar, null, 2);

            fs.writeFileSync('task.JSON', done);

            break;

            

        case 'uncomplete':

            console.log(`\[\] ${daftar[index - 1].todo} status selesai dibatalkan.`);

            daftar[index - 1].complete = false;

            let notyet = JSON.stringify(daftar, null, 2);

            fs.writeFileSync('task.JSON', notyet);

            break;

        case 'list:outstanding':

            console.log('Daftar Pekerjaan');

            if (index == 'asc') {

                for (let z = 0; z < daftar.length; z++) {

                    if (daftar[z].complete === false) {

                        console.log(`${z + 1}. [ ] ${daftar[z].todo}`);

                    }

                }

            } else {

                for (let x = daftar.length; x > 0; x--) {

                    if (daftar[x - 1].complete === false) {

                        console.log(`${x}. [ ] ${daftar[x - 1].todo}`);

                    }

                }

            }

            break;

        case 'list:completed':

            console.log('Daftar Pekerjaan');

            if (index == 'desc') {

                for (let c = daftar.length; c > 0; c--) {

                    if (daftar[c - 1].complete === true) {

                        console.log(`${c}. [x] ${daftar[c - 1].todo}`);

                    }

                }

            } else {

                for (let v = 0; v < daftar.length; v++) {

                    if (daftar[v].complete === true) {

                        console.log(`${v + 1}. [x] ${daftar[v].todo}`)

                    }

                }

            }

            break;

        case 'tag':

            console.log(`Tag '${tags.join(",")}' talah ditambahkan ke daftar '${daftar[nom - 1].todo}'`);

            daftar[nom - 1].tag = tags;

            let mark = JSON.stringify(daftar, null, 2);

            fs.writeFileSync('task.JSON', mark);

            break;

        default:

            let saring = args.slice(7, args.length);

            console.log(`Daftar Pekerjaan`)

            for (let j = 0; j < daftar.length; j++) {

                if (daftar[j].tag.includes(saring) === true) {

                    console.log(`${j + 1}. ${daftar[j].complete ? '[x]' : '[ ]'} ${daftar[j].todo}`)

                }

            }

    }

} else {

    console.log('>>> JS TODO <<<');

    console.log('$ node todo.js <command>');

    console.log('$ node todo.js list');

    console.log('$ node todo.js task <task_id>');

    console.log('$ node todo.js add <task_content>');

    console.log('$ node todo.js delete <task_id>');

    console.log('$ node todo.js complete <task_id>');

    console.log('$ node todo.js uncomplete <task_id>');

    console.log('$ node todo.js list: outstanding asc|desc');

    console.log('$ node todo.js list: completed asc|desc');

    console.log('$ node todo.js tag <task_id> <tag_name_1> <tag_name_2> ... <tag_name_N>');

    console.log('$ node todo.js filter: <tag_name>');

}