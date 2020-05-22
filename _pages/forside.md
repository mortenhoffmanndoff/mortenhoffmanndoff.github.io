---
name: 'Forside'
---

<section class="section-expand bg-gradient-primary text-center" style="background-image: url('/images/bg.jpg')">

    <div class="container">
        <h1 class="cd-headline clip pb-2">
            <!-- <span>I am</span> -->
            <span class="cd-words-wrapper">
                <b class="is-visible">Doff Studio</b>
                <b>UI Design</b>
                <b>Frontend</b>
            </span>
        </h1>
        <p>HTML | SCSS | jQuery | Gulp | Jekyll | Liquid | YML | JSON | Bootstrap </p>
        <div class="mt-2">
            <img src="{{ site.baseurl }}/images/icons/ps.png" alt="">
            <img src="{{ site.baseurl }}/images/icons/ai.png" alt="">
            <img src="{{ site.baseurl }}/images/icons/xd.png" alt="">
            <img src="{{ site.baseurl }}/images/icons/id.png" alt="">
            <img src="{{ site.baseurl }}/images/icons/pr.png" alt="">
        </div>
        <button class="btn btn-primary mt-3">Let's have a look</button>
    </div>
</section>
<div class="figure-up"></div>


<section class="showcase" id="showcase">
    <div class="container-fluid">
        <h2 class="section-header text-center">
            Picked projects
        </h2>
        <div class="articles">

            {% for item in site.data.content.frontpage.articles %}

            <div class="article">
                <div class="article-img">
                    <img data-object-fit="cover" src="{{ site.baseurl }}/images/projects/{{ item.image}}/stage.jpg" alt="">
                </div>
                <div class="article-text text-black">
                    {{ item.text }}
                </div>
                <a class="no-border" href="{{ site.baseurl }}/{{ item.link }}"></a>
            </div>

            {% endfor %}
        </div>
    </div>

</section>

<div class="figure-down"></div>

<section class="bg-secondary bg-gradient-secondary text-white text-center">
    <div class="container">
        <h2 class="section-header">Explained</h2>
        <div class="row">

            {% for item in site.data.content.frontpage.explained %}
            <div class="col-lg-4 col-md-6">
                <div class="item mb-5">
                    <span class="icon ti-package"></span>
                    <h6>{{ item.header }}</h6>
                    <p>{{ item.text }}</p>
                </div>
            </div>
            {% endfor %}

        </div>
    </div>
</section>

<section class="bg-gray">
    <div class="container" style="max-width: 800px;">
        <h2 class="section-header text-center">Let's get in touch</h2>
        <form method="POST" action="https://formspree.io/mortenhoffmann@gmail.com">
            <div class="form-group">
                <label>Name</label>
                <input type="text" name="name" class="form-control">
            </div>
            <div class="form-group">
                <label>Email address</label>
                <input type="email" name="email" class="form-control">
            </div>
            <div class="form-group">
                <label>Message</label>
                <textarea name="message" class="form-control" rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Send</button>
        </form>
    </div>
</section>

<section class="py-0">
    <div class="embed-responsive embed-responsive-16by9">
        <video class="embed-responsive-item" autoplay loop muted playsinline>
            <source src="{{ site.baseurl }}/videos/casual.mp4" type="video/mp4"></source>
        </video>
    </div>
</section>
