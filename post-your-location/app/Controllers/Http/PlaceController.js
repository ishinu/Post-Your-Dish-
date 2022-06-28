'use strict'

const Place = use('App/Models/Place')

class PlaceController {
    async home({view}){

        // 1.Create a New entry on each page refresh.

        // const place = new Place;
        // place.title = 'Sikkim';
        // place.description = 'Beautiful place';
        // place.link = 'http://google.com';
        // await place.save();

        // 2.Fetch all db entries on 'index' page render.
        const places = await Place.all();
        return view.render('index',{ places: places.toJSON() });
    }
    async personal({view}){
        
        const places = await Place.all();
        return view.render('myplaces',{ places: places.toJSON() });
    }

    async userIndex({view,auth}){
        const places = await auth.user.places().fetch();
        return view.render('places',{ places: places.toJSON()});
    }

    async create({ request,response,session,auth }){
        const place = request.all();
        const posted = await auth.user.places().create({
            title: place.title,
            description: place.description,
            link: place.link
        })
        session.flash({message: 'Your Location has been saved!'});
        return response.redirect('back');
    }

    async delete({response,session,params}){
        const place = await Place.find(params.id);
        await place.delete();
        session.flash({message: 'Your Location has been deleted!'});
        return response.redirect('back');
    }

    async edit({params,view}){
        const place = await Place.find(params.id);
        return view.render('edit',{place:place});
    }

    async update({response,request,session,params}){
        const place = await Place.find(params.id);

        place.title =   request.all().title;
        place.description = request.all().description;
        place.link = request.all().link;

        await place.save();

        session.flash({message: 'Your Location has been updated!'});
        return response.redirect('/post-a-location');
        
    }
}


module.exports = PlaceController
