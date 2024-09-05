import * as gfx from 'gophergfx'
import { Rectangle, ShapeInstance } from 'gophergfx';

export class blahblah extends gfx.GfxApp
{
    private star: gfx.Rectangle;

    constructor()
    {
        // The first line of any child class constructor must call
        // the base class's constructor using the super() method. 
        super();

        // Initialize all the member variables
        this.star = new gfx.Rectangle();

        this.renderer.viewport = gfx.Viewport.CROP;
    }
}